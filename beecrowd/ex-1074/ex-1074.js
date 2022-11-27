var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var x = 0, msg = ''

function leitura (qnt) {
    for (let i = 1; i <= qnt; i++) {
        x = parseInt(lines[i])
        if (x === 0) {
            msg += 'NULL'
        }
        else if (x % 2 === 0) {
            msg += 'EVEN '
        }
        else if (x % 2 !== 0 ) {
            msg += 'ODD '
        }
        if (x < 0) {
            msg += 'NEGATIVE'
        }
        else if (x > 0) {
            msg += 'POSITIVE'
        }
        if (i < qnt) {
            msg += '\n'
        }
    }
    return console.log(msg)
}

leitura(lines[0])