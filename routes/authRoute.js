const loginControllerFunction = require('../controllers/login_controller');


/**
* Function that responds with the response for the actual endpoint
* req - the request object --> what you are getting from the front endpoint
* loginResponse --> did it fail or not. Error or Token depending
*/

const authRoute = (req, loginResponse)=>{
  const userData = req.body;
  loginControllerFunction.loginControllerFunction(userData)
  .then((response)=>{
    loginResponse.send(response);
  })
  .catch((error) =>{
    loginResponse.send(error.error);
  });
};

module.exports = authRoute;
