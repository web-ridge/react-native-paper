module.exports = {
  plugins: [
    ['babel-plugin-react-compiler', { logLevel: 'verbose', target: 19 }],
  ],
  presets: ['module:@react-native/babel-preset'],
};
