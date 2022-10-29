var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines[0]. split(' ')

a = parseFloat(line[0])
b = parseFloat(line[1])
c = parseFloat(line[2])

var delta = (b * b - 4 * a * c).toFixed(2)

if (delta <= 0) {
    console.log('Impossivel calcular')
}
else if (a == 0) {
    console.log('Impossivel calcular')
}
else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)

    console.log('R1 = ' + x1.toFixed(5))
    console.log('R2 = ' + x2.toFixed(5))
}