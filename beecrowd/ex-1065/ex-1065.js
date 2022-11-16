var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n'), u = 0 // Enviar com essa linha!!!!

for (let i = 0; i < lines.length; i++) {
    x = parseInt(lines[i])
    if (x % 2 === 0) {
        u++
    }
}

console.log (u + ' valores pares')