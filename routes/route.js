const authRoute = require('./authRoute');


function route(app){
  app.post('./api/auth', authRoute);
}

module.exports = route
