var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0]
var b = lines[1]

var p1 = a.split(' ')
var cP1 = p1[0]
var uP1 = p1[1]
var pP1 = p1[2]


var p2 = b.split(' ')
var cP2 = p2[0]
var uP2 = p2[1]
var pP2 = p2[2]

function pagar () {
    total = (pP1 * uP1) + (pP2 * uP2)
    console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))
}

pagar()