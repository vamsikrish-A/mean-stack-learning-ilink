console.log('[3] use-arithmetic.js started');

//we got the module.exports from arithmetic.js
const arithmetic = require("./03-arithmetic");

//IMPORTANT: The file will not run Once again
const arithmetic2 = require("./03-arithmetic");

//Not multiply is not available
console.log( arithmetic);

console.log( arithmetic.addArray([1,2,3,4,5]));
console.log(arithmetic2.addArray([1,2,3,4]));

console.log('[4] use-arithemetic.js ended');