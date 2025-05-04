import 'jest-preset-angular/setup-jest';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// Set NODE_ENV to test
process.env['NODE_ENV'] = 'test'; 