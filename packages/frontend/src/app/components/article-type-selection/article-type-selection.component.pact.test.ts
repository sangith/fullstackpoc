import { Pact, Matchers } from '@pact-foundation/pact';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ArticleTypeService } from '../../services/article-type.service';
import { mockArticleTypes } from '../../mocks/articleTypes';
import { firstValueFrom } from 'rxjs';
import { ArticleType } from '../../../models/journal';

// Mock the environment
jest.mock('../../../environments/environment', () => ({
  environment: {
    production: false,
    test: true,
  },
}));

describe('ArticleType Pact Test', () => {
  const provider = new Pact({
    consumer: 'frontend',
    provider: 'article-metadata-api',
    port: 3003,
    dir: './pacts',
    logLevel: 'debug',
  });

  beforeAll(async () => {
    await provider.setup();
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ArticleTypeService],
    });
  });

  it('gets article types from API', async () => {
    // Arrange
    const expectedArticleTypes: ArticleType[] = mockArticleTypes;

    // Set up Pact interaction
    await provider.addInteraction({
      state: 'has article types',
      uponReceiving: 'a request for article types',
      withRequest: {
        method: 'GET',
        path: '/journal-meta-data/1',
        headers: { Accept: 'application/json' },
      },
      willRespondWith: {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: expectedArticleTypes as any,
      },
    });

    const articleTypeService = TestBed.inject(ArticleTypeService);

    // Act
    const articleTypes = await firstValueFrom(articleTypeService.getArticleTypes());

    // Assert
    expect(articleTypes).toEqual(expectedArticleTypes);
  });

  afterEach(async () => {
    await provider.verify();
  });

  afterAll(async () => {
    await provider.finalize();
  });
}); 