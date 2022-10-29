var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distanciaTotal = parseInt(lines[0])
var combustivelTotal = parseFloat(lines[1])

function CalculoConsumo(distanciaTotal,combustivelTotal){

    let consumo = (distanciaTotal / combustivelTotal).toFixed(3)

    console.log(`${consumo} km/l`);
}

CalculoConsumo(distanciaTotal,combustivelTotal)