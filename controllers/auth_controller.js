const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');



const User = require('../models/login');


/**
* login controller function takes the data returned from the model and verifies it
* this will return an error if not "auth certified" or it will return the JWT token that was create
*/

function loginControllerFunction(userData)
{
  User user = new User(userData.username, userData.password);
  user.getLogin(){
    .then((response)=>{
      if response == True{
      //create user token
      let token = jwt.sign({username: username},
        config.secret,
        { expiresIn: '24h' // expires in 24 hours
        }
      );
      // return the JWT token for the future API calls
      res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
      })};

      else {
        res.send(400).json({
          success: false,
          message: 'Authentication failed! Please check the request'
        });

    )
    .catch(error)
     //return error
  }

}











class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';

    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}

module.exports =  loginControllerFunction
