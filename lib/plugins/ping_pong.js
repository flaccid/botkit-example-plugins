'use strict';

module.exports = {
  init: function(controller, bot, app) {
    controller.hears('ping',
    ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
      bot.reply(message, 'pong');
    });
  }
};
