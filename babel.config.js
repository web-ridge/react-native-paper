module.exports = {
  plugins: [
    [
      'babel-plugin-react-compiler',
      {
        logLevel: 'verbose',

        // compilationMode: 'all',
        // panicThreshold: 'all_errors',
        logger: {
          logEvent(filename, event) {
            if (event.kind === 'CompileSuccess') {
              console.log('✔ Compiled:', filename);
            } else {
              console.warn('ℹ Compilation error in:', filename, event.reason);
            }
          },
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
