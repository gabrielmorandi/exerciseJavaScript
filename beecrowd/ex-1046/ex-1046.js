var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ') // tem que mandar com essa linha!

hi = parseInt(lines[0])
hf = parseInt(lines[1])
var i = 0

if (hf < hi) {
    for (i; hi < 24; i++) {
        hi++
    }
    i = i + hf
    console.log('O JOGO DUROU ' + i + ' HORA(S)')
}

else if (hi == hf) {
    console.log('O JOGO DUROU 24 HORA(S)')
}

else {
    i = hf - hi
    console.log('O JOGO DUROU ' + i + ' HORA(S)')
}