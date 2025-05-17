import 'dotenv/config';
import { Verifier, LogLevel } from '@pact-foundation/pact';
import path from 'path';
import { app } from '../server';

describe('Pact Verification', () => {
  const server = app.listen(3002);

  afterAll(() => {
    server.close();
  });

  it('validates the expectations of the frontend consumer', async () => {
    const opts = {
      provider: 'journal-metadata-api',
      providerBaseUrl: 'http://localhost:3002',
      pactUrls: [path.resolve(process.cwd(), 'pacts', 'frontend-journal-metadata-api.json')],
      logLevel: 'info' as LogLevel,
    };

    try {
      await new Verifier(opts).verifyProvider();
    } catch (error) {
      console.error('Pact verification failed:', error);
      throw error;
    }
  }, 10000);
}); 