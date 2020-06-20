'use strict';

/**
 * Dependencies
 */
const path = require('path');
const currentEnvironment = process.env.NODE_ENV || 'development';
const CONFIG_PATH = path.join(__dirname, 'configs');

/*---------- Setting the PATH ----------*/
const BASE_PATH = path.resolve(path.join(__dirname, '..'));
const APP_PATH = __dirname;

/*---------- Config based on Env ----------*/
const config = loadConfig(currentEnvironment);

// Setting Current Selected Env 
config.ENV = currentEnvironment;
config.PATH = {
  'APP': APP_PATH,
  'BASE': BASE_PATH
};

/**
 * Helper to load a config file
 */
function loadConfig(env) {
  const configPath = path.join(CONFIG_PATH, env);
  try {
    return require(configPath);
  } catch (e) {
    if (env === 'development') {
      return loadConfig('dev');
    }
    if (env === 'production') {
      return loadConfig('prod');
    } else {
      console.error(e);
      console.log('Could not load environment configuration file');
      process.exit(0);
    }
  }
}

module.exports = config;