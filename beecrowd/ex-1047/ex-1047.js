var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split(' ') // tem que mandar com essa linha!!

hi = parseInt(lines[0])
mi = parseInt(lines[1])
hf = parseInt(lines[2])
mf = parseInt(lines[3])
var i = 0, u = 0

if (hf < hi) {
    for (i; hi < 24; i++) {
        hi++
    }
    i = i + hf - 1
    if (mf < mi) {
        u = 60 - mi
        u = u + mf
    }

    else if (mf == mi) {
        i = i + 1
    }

    else {
        i = i++
        u = mf - mi
    }
}

else if (hf == hi && mf == mi) {
    i = 24
    u = 0
}

else if (hf == hi && mf < mi) {
    for (u; mi < 60; u++) {
        mi++
    }
    i = 23
    u = u + mf
}

else if (hf == hi && mf > mi) {
    u = mf - mi
}

else {
    i = hf - hi
    if (mf < mi) {
        i--
        u = 60 - mi
        u = u + mf
    }

    else if (mf == mi) {
        // 
    }

    else {
        u = mf - mi
    }
}
console.log('O JOGO DUROU ' + i + ' HORA(S) E ' + u + ' MINUTO(S)')
