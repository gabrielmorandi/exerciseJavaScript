var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = [], i = 0

class Particula {
    constructor (v, t) {
        this.v = v
        this.t = t
    }

    static deslocamento(v, t) {
        return (t * v) * 2
    }
}

while (lines.length > 0) {
    let linha = lines.shift()
    var [v, t] = linha.split(' ');

    if (v && t) {
        parseInt(v);
        parseInt(t);
        if ((v * t) * 2 == -0) {
            console.log(0);
        }
        else {
            let a = new Particula(v, t)
            x.push(a)
            console.log(Particula.deslocamento(x[i].v, x[i].t))
            i++
        }
    }
}