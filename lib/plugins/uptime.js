'use strict';

const os = require('os');

/**
 * Formats an uptime from process.uptime().
 * @param {int} uptime The uptime.
 * @return {int} The resultant uptime in a human friendly string.
 */
function formatUptime(uptime) {
  let unit = 'second';

  if (uptime > 60) {
    uptime /= 60;
    unit = 'minute';
  }

  if (uptime > 60) {
    uptime /= 60;
    unit = 'hour';
  }

  if (uptime !== 1) {
    unit += 's';
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
