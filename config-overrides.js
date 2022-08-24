module.exports = function override(config, env) {
  config.resolve = {
    fallback: {
      stream: require.resolve('stream-browserify'),
      // error after install google-spreadsheet(happen on react-script5.0.0)
      // https://stackoverflow.com/questions/70406962/google-spreadsheet-api-throws-crypto-createsign-error-in-react-app-with-webpack
      child_process: false,
      fs: false, 
    },
  };

  return config;
}