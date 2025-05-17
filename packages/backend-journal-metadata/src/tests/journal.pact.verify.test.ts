import 'dotenv/config';
import { Verifier, LogLevel } from '@pact-foundation/pact';
import path from 'path';
import { app } from '../server';
import '@jest/globals';

describe('Pact Verification', () => {
  const server = app.listen(3002);

  afterAll(() => {
    server.close();
  });

  it('validates the expectations of the frontend consumer', async () => {
    const opts = {
      provider: 'article-metadata-api',
      providerBaseUrl: 'http://localhost:3002',
      pactBrokerUrl: 'http://localhost:9292',
      consumerVersionSelectors: [
        { latest: true }
      ],
      publishVerificationResult: true,
      providerVersion: process.env.npm_package_version || '1.0.0',
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