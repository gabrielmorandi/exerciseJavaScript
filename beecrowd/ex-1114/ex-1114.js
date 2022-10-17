var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var senha = parseInt(lines[0]), i = 0

while (senha != 2002) {
    senha = parseInt(lines[i])
    i++
    if (senha != 2002) {
        console.log('Senha Invalida')
    }
    else {
        console.log('Acesso Permitido')
    }
}