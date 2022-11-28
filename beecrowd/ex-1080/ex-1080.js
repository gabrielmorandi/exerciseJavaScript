var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var x = 0, z = 0

for (let i = 0; i < lines.length; i++) {
    let y = parseInt(lines[i])
    if (y > x) {
        x = y
        z = i + 1
    }
}

console.log(x)
console.log(z)
