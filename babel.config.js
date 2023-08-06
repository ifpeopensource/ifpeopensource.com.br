module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-styled-components', { ssr: true }],
    'inline-react-svg',
    '@emotion',
  ],
};
