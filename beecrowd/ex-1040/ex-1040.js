var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(' ')

a = parseFloat(line[0])
b = parseFloat(line[1])
c = parseFloat(line[2])
d = parseFloat(line[3])

function media(a, b, c, d) {
    m = ((a * .2) + (b * .3) + (c * .4) + (d * .1))
    return m.toFixed(2)
}

function exameFinal(e, media) {
    me = (media + e) / 2
    if (me >= 5) {
        console.log('Aluno aprovado.\n' + 'Media final: ' + me.toFixed(1))
    }
}

l = parseFloat(media(a, b, c, d))

console.log('Media: ' + l.toFixed(1))

if (m >= 7) {
    console.log('Aluno aprovado.')
}
else if (m < 7 && m >= 5) {
    console.log('Aluno em exame.')
    e = parseFloat(lines[1])
    console.log('Nota do exame: ' + e.toFixed(1))
    exameFinal(e, m)
}
else {
    console.log('Aluno reprovado.')
}
