var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

qnt = parseInt(lines[0])
var inn = 0, out = 0

for ( let i = 1; i <= qnt; i++) {
    if (lines[i] >= 10 && lines[i] <= 20) {
        inn++
    }
    else {
        out++
    }
}

console.log(inn + ' in')
console.log(out + ' out')