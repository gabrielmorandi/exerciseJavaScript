var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

class Ingredientes {
    constructor (farinha, ovo, leite) {
        this.farinha = farinha
        this.ovo = ovo
        this.leite = leite
        this.f = Math.trunc(farinha / 2)
        this.o = Math.trunc(ovo / 3)
        this.l = Math.trunc(leite / 5)
    }

    static quantidadeBolos(f, o, l) {
        if (o === 0) {
            return console.log('0')
        }
        else if (f === 0) {
            return console.log('0')
        }
        else if (l === 0) {
            return console.log('0')
        }
        else {
            if (f > o) {
                f = o
            }
            else if (o > f) {
                o = f
            }
            else if (o == f) {
                //
            }
            if (o > l) {
                o = l
            }
            else if (l > o) {
                l = o
            }
            else if (l == o) {
                //
            }
            if (l > f) {
                l = f
            }
            else if (f > l) {
                f = l
            }
            else if (f == l) {
                //
            }
            console.log(l)
        }
    }
}

a = lines[0].split(' ')
x = new Ingredientes(a[0], a[1], a[2])
Ingredientes.quantidadeBolos(x.f, x.o, x.l)