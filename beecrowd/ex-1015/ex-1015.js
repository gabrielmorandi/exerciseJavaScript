var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0]
var b = lines[1]
var lines2 = a.split(' ')
var lines3 = b.split(' ')

class Ponto {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    static distancia (x1, y1, x2, y2) {
        return (Math.sqrt(((x2 - x1) **2 ) + ((y2 - y1) ** 2))).toFixed(4)
    }
}

const p1 = new Ponto(lines2[0], lines2[1])
const p2 = new Ponto(lines3[0], lines3[1])

console.log(Ponto.distancia(p1.x, p1.y, p2.x, p2.y));