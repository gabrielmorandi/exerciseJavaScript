var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

x = lines[0]
ano = Math.trunc(x / 365)
x = x - (ano * 365)
mes = Math.trunc(x / 30)
x = x - (mes * 30)
dia = Math.trunc(x / 1)
x = x - (dia * 1)
console.log(ano + ' ano(s)')
console.log(mes + ' mes(es)')
console.log(dia + ' dia(s)')