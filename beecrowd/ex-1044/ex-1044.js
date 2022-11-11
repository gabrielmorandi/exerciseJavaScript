var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ') // tem que mandar com essa linha!

function ord(a, b) {
    return a - b
}

lines.sort(ord)

if (lines[1] % lines[0] == 0) {
    console.log('Sao Multiplos')
}
else {
    console.log('Nao sao Multiplos')   
}