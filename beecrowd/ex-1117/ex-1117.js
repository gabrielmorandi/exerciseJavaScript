var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i = 0, u = 0, validade1 = false, validade2 = false, notas = [], nota = -1, somaNotas = 0

function guardarNotas() {
    while (validade1 != true) {
        n = validaNotas()
        if (n === undefined) {
            console.log('nota invalida')
        }
        else {
            notas.push(n)
        }
    }
    while (validade2 != true) {
        n = validaNotas()
        if (n === undefined) {
            console.log('nota invalida')
        }
        else {
            notas.push(n)
        }
    }
    somaNotas = notas.reduce(function(a, b){return (a + b) / 2})
    console.log('media = ' + somaNotas.toFixed(2))
}

function validaNotas() {
    nota = parseFloat(lines[i])
    i++
    if (nota >= 0 && nota <= 10 && u == 0) {
        if (validade1 != true) {
            validade1 = true
            u++
            return nota
        }
    }
    if (nota >= 0 && nota <= 10 && u == 1) {
        if (validade2 != true) {
            validade2 = true
            u++
            return nota
        }
    }
}

guardarNotas()