// Karma + Jasmine + cobertura (karma-coverage / istanbul)
module.exports = (config) =>
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: ['src/**/*.spec.jsx'],
    preprocessors: { 'src/**/*.spec.jsx': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [{
          test: /\.jsx?$/, exclude: /node_modules/,
          use: { loader: 'babel-loader', options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            plugins: [['istanbul', { exclude: ['**/*.spec.jsx', '**/test-utils.jsx'] }]],
          } },
        }],
      },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: { dir: 'coverage', reporters: [{ type: 'html' }, { type: 'text-summary' }] },
    browsers: ['ChromeHeadless', 'FirefoxHeadless'], // varios navegadores
    singleRun: true,
  });
