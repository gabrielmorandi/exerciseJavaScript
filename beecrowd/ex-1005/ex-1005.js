var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])

function media () {
    aa = a * 0.35
    bb = b * 0.75
    calc = aa + bb
    console.log('MEDIA = ' + calc.toFixed(5))
}

media()

// bugado...
