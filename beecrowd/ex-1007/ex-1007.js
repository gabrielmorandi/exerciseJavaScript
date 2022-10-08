var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseInt(lines[2])
d = parseInt(lines[3])

function dif () {
    calc = a * b - c * d
    console.log('DIFERENCA = ' + calc)
}

dif()