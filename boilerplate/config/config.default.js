'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignoreJSON: false,
    },
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'miniapp123',
      database: '',
    },
    app: true,
    agent: false,
  };

  config.mongoose = {
    client: {
      url: 'mongodb://admin:miniapp123@127.0.0.1/example',
    },
  };

  return config;
};
