'use strict';

const os = require('os');

function formatUptime(uptime) {
  let unit = 'second';

  if (uptime > 60) {
    uptime = uptime / 60;
    unit = 'minute';
  }

  if (uptime > 60) {
    uptime = uptime / 60;
    unit = 'hour';
  }

  if (uptime != 1) {
    unit = unit + 's';
  }

  uptime = (Math.round(uptime * 100) / 100) + ' ' + unit;
  return uptime;
}

module.exports = {
  init: function(controller, bot, app) {
    controller.hears('^uptime', ['direct_message', 'direct_mention', 'mention'],
      (bot, message) => {
        bot.reply(message, ':robot_face: I have been running for ' +
          formatUptime(process.uptime()) + ' on ' + os.hostname());
    });
  }
};
