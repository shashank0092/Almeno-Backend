const express = require('express');
const app = express();

// Example middleware function
const student = (req, res, next) => {
  
  next();
};

module.exports=student