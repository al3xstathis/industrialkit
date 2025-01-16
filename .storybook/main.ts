import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
};
export default config;
