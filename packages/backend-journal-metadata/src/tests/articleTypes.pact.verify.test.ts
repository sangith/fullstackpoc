import 'dotenv/config';
import { Verifier, LogLevel } from '@pact-foundation/pact';
import path from 'path';
import { app } from '../server';
import 'jest';

describe('Pact Verification for Article Types', () => {
  const server = app.listen(3003);

  afterAll(() => {
    server.close();
  });

  it('validates the expectations of the frontend consumer for article types', async () => {
    const opts = {
      provider: 'journal-metadata-api',
      providerBaseUrl: 'http://localhost:3003',
      pactUrls: [path.resolve(process.cwd(), 'pacts', 'frontend-journal-metadata-api.json')],
      logLevel: 'info' as LogLevel,
    };

    try {
      await new Verifier(opts).verifyProvider();
    } catch (error) {
      console.error('Pact verification failed:', error);
      throw error;
    }
  }, 30000);
}); 