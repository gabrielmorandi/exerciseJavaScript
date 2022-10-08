var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
var raio = parseFloat(lines[0]);
console.log('A='+ ((n*(raio**2)).toFixed(4)));