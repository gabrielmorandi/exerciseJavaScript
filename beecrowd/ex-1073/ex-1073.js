var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var x = 2

if (lines[0] % 2 === 0) {
    for (let i = 0; i < lines[0]; i += 2) {
        console.log(x + '^2 = ' + x*x)
        x++
        x++
    }
}
