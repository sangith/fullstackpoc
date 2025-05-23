import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  staticDirs: ['../public','../src/assets'],

  "addons": [{
    "name": "@storybook/addon-essentials",
    "options": {
      "docs": false
    }
  }, "@storybook/addon-onboarding", "@storybook/addon-interactions", '@storybook/addon-designs', "@chromatic-com/storybook"],

  "framework": {
    "name": "@storybook/angular",
    "options": {
      enableNgcc: true,

      builder: {
        builder: "@storybook/builder-webpack5",

        options: {
          fsCache: true,
          lazyCompilation: true
        }
      }
    }
  }
};
export default config;