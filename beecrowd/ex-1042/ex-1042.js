var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

line = lines[0].split(' ')
line2 = lines[0].split(' ')

function ord (a, b) {
    return a - b
}

line.sort(ord)

for (let i = 0; i < line.length; i++) {
    console.log(line[i])
}

console.log('')

for (let i = 0; i < line2.length; i++) {
    console.log(line2[i])
}
