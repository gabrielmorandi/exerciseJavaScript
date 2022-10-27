var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var novo = 1, i = 0, u = 0, x = [], e = 0, g = 0, ii = 0

class Grenal {
    constructor(i, g, r) {
        this.i = i
        this.g = g
        this.r = r
    }
}

while (novo != 2) {
    var a = lines[u]
    let lines2 = a.split(' ')
    if (lines2.length == 0) {
        // 
    }
    else if (lines2.length != 1) {
        i++
        let re = lines2[0] - lines2[1]
        if (re > 0) {
            res = 'i'
        }
        else if (re < 0) {
            res = 'g'
        }
        else if (re === 0) {
            res = 'e'
        }
        let b = new Grenal(lines2[0], lines2[1], res)
        x.push(b)
        console.log('Novo grenal (1-sim 2-nao)')
    }
    else if (lines2.length == 1){
        novo = lines2[0]
    }
    u++
}
for (let z = 0; z < i; z++) {
    if (x[z].r === 'e') {
        e++
    }
    else if (x[z].r === 'g') {
        g++
    }
    else if (x[z].r === 'i') {
        ii++
    }
}
console.log(x.length + ' grenais')
console.log('Inter:' + ii)
console.log('Gremio:' + g)
console.log('Empates:' + e)
if (g - ii === 0) {
    console.log('Empate')
}
else if (g > ii) {
    console.log('Gremio venceu mais')
}
else if (ii > g) {
    console.log('Inter venceu mais')
}
