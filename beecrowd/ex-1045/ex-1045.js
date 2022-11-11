var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ') // tem que mandar com essa linha!!

function ord(a, b) {
    return b - a
}

lines.sort(ord)

a = parseFloat(lines[0])
b = parseFloat(lines[1])
c = parseFloat(lines[2])

if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO')
}
if (a**2 == b**2 + c**2) {
    console.log('TRIANGULO RETANGULO')
}
if (a**2 > b**2 + c**2 && a < b + c) {
    console.log('TRIANGULO OBTUSANGULO')
}
if (a**2 < b**2 + c**2) {
    console.log('TRIANGULO ACUTANGULO')
}
if (a == b && b == c) {
    console.log('TRIANGULO EQUILATERO')
}
if ((a == b && a != c)  || (b == c && b != a) || (a == c && a != b)) {
    console.log('TRIANGULO ISOSCELES')
}
