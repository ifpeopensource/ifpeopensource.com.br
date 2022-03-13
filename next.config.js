const withImages = require('next-images');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  esModule: true,
  images: {
    domains: [
      'images.unsplash.com',
      'raw.githubusercontent.com',
      'assets.hackclub.com',
    ],
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  silent: true,
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(
  withImages(moduleExports),
  sentryWebpackPluginOptions
);
