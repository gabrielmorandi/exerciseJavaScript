var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0])
var b = parseInt(lines[1])
PROD = a * b
console.log('PROD = '+PROD);