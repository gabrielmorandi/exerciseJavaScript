var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0]
var sFixo = parseFloat(lines[1])
var tVendas = lines[2]

function salario () {
    total = (tVendas * 0.15) + sFixo
    console.log('TOTAL = R$ ' + total.toFixed(2))
}

salario()