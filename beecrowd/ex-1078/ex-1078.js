var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

x = parseInt(lines[0])

for (let i = 1; i <= 10; i++) {
    console.log(i + ' x ' + x + ' = ' + x * i)
}