'use strict';

const config = {
  plugins: [
    require('./lib/plugins/express_static_page.js'),
    require('./lib/plugins/ping_pong.js'),
    require('./lib/plugins/uptime.js')
  ],
  debug: process.env.BOTKIT_DEBUG,
  port: process.env.BOTKIT_PORT || 8585
};

require('skellington')(config);
