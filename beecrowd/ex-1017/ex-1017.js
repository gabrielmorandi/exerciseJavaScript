var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const tempoGasto = parseInt(lines[0])
const velocidadeMedia = parseInt(lines[1])

const calculoCombustivel = function(){

    let distanciaPercorrida = (tempoGasto * velocidadeMedia)

    let quantidadeLitros = (distanciaPercorrida / 12).toFixed(3)

    return console.log(quantidadeLitros);

}

calculoCombustivel()