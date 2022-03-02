const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  images: {
    domains: [
      'images.unsplash.com',
      'raw.githubusercontent.com',
      'assets.hackclub.com',
    ],
  },
});
