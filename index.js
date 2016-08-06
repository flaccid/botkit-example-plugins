'use strict';

const config = {
  plugins: [
    require('./lib/plugins/ping_pong.js'),
  ],
};

require('skellington')(config);
