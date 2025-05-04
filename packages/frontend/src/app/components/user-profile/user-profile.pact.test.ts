import { Pact, Matchers } from '@pact-foundation/pact';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile.component';
import { UserService, User } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

// Mock the environment
jest.mock('../../../environments/environment', () => ({
  environment: {
    production: false,
    test: true,
  },
}));

describe('UserProfile Pact Test', () => {
  const provider = new Pact({
    consumer: 'frontend',
    provider: 'userservice',
    port: 1234,
    dir: './pacts',
    logLevel: 'debug',
  });

  beforeAll(async () => {
    await provider.setup();
    
    TestBed.configureTestingModule({
      imports: [HttpClientModule, UserProfileComponent],
      providers: [UserService],
    });
  });

  it('gets user profile from API', async () => {
    // Arrange
    const expectedUser: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    // Set up Pact interaction
    await provider.addInteraction({
      state: 'User exists',
      uponReceiving: 'a request for user profile',
      withRequest: {
        method: 'GET',
        path: '/user/1',
      },
      willRespondWith: {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          id: Matchers.string('1'),
          name: Matchers.string('John Doe'),
          email: Matchers.string('john@example.com'),
        },
      },
    });

    const userService = TestBed.inject(UserService);

    // Act
    const user = await firstValueFrom(userService.getUser('1'));

    // Assert
    expect(user).toEqual(expectedUser);
  });

  afterEach(async () => {
    await provider.verify();
  });

  afterAll(async () => {
    await provider.finalize();
  });
}); 