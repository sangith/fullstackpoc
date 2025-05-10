import { initialize, mswDecorator } from "msw-storybook-addon";
import { handlers } from "../src/mocks/handlers";
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Initialize MSW
initialize();

export const decorators = [mswDecorator];

export const parameters = {
  //actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers,
  },
};

export const applicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
};