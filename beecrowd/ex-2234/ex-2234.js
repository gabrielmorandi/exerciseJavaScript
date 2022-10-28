var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valoresEntrada = lines[0].split(' ')

var H = valoresEntrada[0];
var P = valoresEntrada[1];

console.log(H);
console.log(P);

class participante {

    constructor(H,P){
        this.H = H;
        this.P = P;
    }

    get media() {
        return (this.H / this.P).toFixed(2);
    }
  
}

const mediaParticipante = new participante(H,P);

console.log(mediaParticipante.media)