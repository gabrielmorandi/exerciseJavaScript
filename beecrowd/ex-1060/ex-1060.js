var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n'), a = 0 //precisa colocar até essa linha!!

for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
        a++
    }
}

console.log(a + ' valores positivos')