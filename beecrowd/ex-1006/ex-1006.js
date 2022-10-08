var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])
var c = parseFloat(lines[2])

function media () {
    aa = a * 0.2
    bb = b * 0.3
    cc = c * 0.5
    calc = aa + bb + cc
    console.log('MEDIA = ' + calc.toFixed(1))
}

media()