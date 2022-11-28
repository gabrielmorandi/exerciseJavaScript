var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

qnt = lines[0]

for (let i = 1; i <= qnt; i++) {
    let c = lines[i].split(' ')
    let n1 = c[0] * 0.2
    let n2 = c[1] * 0.3
    let n3 = c[2] * 0.5
    let nt = n1 + n2 + n3
    console.log(nt.toFixed(1))
}