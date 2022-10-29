var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

x = lines[0]
n100 = Math.trunc(x / 100)
x = x - (n100* 100)
n50 = Math.trunc(x / 50)
x = x - (n50 * 50)
n20 = Math.trunc(x / 20)
x = x - (n20 * 20)
n10 = Math.trunc(x / 10)
x = x - (n10 * 10)
n5 = Math.trunc(x / 5)
x = x - (n5 * 5)
n2 = Math.trunc(x / 2)
x = x - (n2 * 2)
n1 = Math.trunc(x / 1)
x = x - (n1 * 1)

console.log(lines[0])
console.log(n100 + ' nota(s) de R$ 100,00')
console.log(n50 + ' nota(s) de R$ 50,00')
console.log(n20 + ' nota(s) de R$ 20,00')
console.log(n10 + ' nota(s) de R$ 10,00')
console.log(n5 + ' nota(s) de R$ 5,00')
console.log(n2 + ' nota(s) de R$ 2,00')
console.log(n1 + ' nota(s) de R$ 1,00')