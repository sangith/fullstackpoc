import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {
      "enableNgcc": true,
      "builder": {
        "builder": "@storybook/builder-webpack5",
        "options": {
          "fsCache": true,
          "lazyCompilation": true
        }
      }
    }
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
};
export default config;