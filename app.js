
const log = require('./logger');
const path = require('path');

const sayHello = function sayHello() {
  console.log("Hello");
};

log("Hello Himanshu");
const pathObj = path.parse(__filename);
console.log(pathObj);