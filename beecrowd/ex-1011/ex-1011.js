var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function CalcularEsfera(raio){
    const pi = 3.14159
    var raio = parseInt(lines[0])

    esfera = ((4.0 / 3.0) * pi * raio ** 3).toFixed(3)

    console.log(`VOLUME = ${esfera}`);
}

CalcularEsfera()