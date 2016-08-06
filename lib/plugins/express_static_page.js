'use strict';

module.exports = {
  init: function(controller, bot, app) {
    if (!(app)) {
      return console.warn('warn: Express Static Page plugin' +
        ' needs an Express server in order to serve the / webpage');
    }

    app.set('view engine', 'ejs')
    app.get('/', function(req, res) {
      // renders views/root.ejs
      res.render('root');
    });
  }
}
