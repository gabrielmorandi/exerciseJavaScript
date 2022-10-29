var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159

var valoresEntrada = (lines[0].split(' '))

var A = parseFloat(valoresEntrada[0])
var B = parseFloat(valoresEntrada[1])
var C = parseFloat(valoresEntrada[2])

function CalculoArea(A,B,C){

    let areaTriangulo = ((A * C) / 2).toFixed(3)
    let areaCirculo = (pi * (C ** 2)).toFixed(3)
    let areaTrapezio = (((A + B) * C) / 2).toFixed(3)
    let areaQuadrado = (B ** 2).toFixed(3)
    let areaRetangulo = (A * B).toFixed(3)

    console.log(`TRIANGULO: ${areaTriangulo}`);
    console.log(`CIRCULO: ${areaCirculo}`);
    console.log(`TRAPEZIO: ${areaTrapezio}`);
    console.log(`QUADRADO: ${areaQuadrado}`);
    console.log(`RETANGULO: ${areaRetangulo}`);
}

CalculoArea(A,B,C)