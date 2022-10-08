var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

nFuncionario = lines[0]
nHoras = parseInt(lines[1])
vHora = parseFloat(lines[2])

function salario () {
    total = vHora * nHoras
    console.log('NUMBER = ' + nFuncionario + '\nSALARY = U$ ' + total.toFixed(2))
}

salario()