var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

x = parseInt(lines[0])

for (let i = 0; i <= 10000; i++) {
    if (i % x === 2) {
        console.log(i)
    }
}