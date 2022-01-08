const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, ".."),
    ];

    config.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        "postcss-loader",
      ],
    });

    config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    ).exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
          ],
        },
        {
          issuer: {
            test: /\.css$/,
          },
          loader: "url-loader",
        },
      ],
    });

    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );

    return config;
  },

  framework: "@storybook/react",
};
