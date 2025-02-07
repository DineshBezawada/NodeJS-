require('./xyz');
// const {text,calculateSum} = require('./calculate/sum');
// import {calculateSum} from "./sum.js"

const {calculateSum, calculateMultiply} = require("./calculate");


const name = `Namste NodeJs`;
var a= 10;
var b = 20;

console.log( globalThis === global );
calculateSum(10,50);
calculateMultiply(10,50);

console.log("GIT Message");