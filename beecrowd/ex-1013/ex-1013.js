var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valoresEntrada = (lines[0].split(' '))

var A = parseFloat(valoresEntrada[0])
var B = parseFloat(valoresEntrada[1])
var C = parseFloat(valoresEntrada[2])

function CalculoMaior(A,B,C){

    let maiorAB = (A+B+Math.abs(A-B)) / 2
    let maiorABC = (maiorAB+C+Math.abs(maiorAB - C)) / 2

    console.log(`${maiorABC} eh o maior`);
}

CalculoMaior(A,B,C)