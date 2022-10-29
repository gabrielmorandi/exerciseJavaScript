var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const tempoSegundos = parseInt(lines[0])
const h = tempoSegundos % 3600;
const r = h % 60;

const calcularTempo = function(){


    let horas = parseInt(tempoSegundos / 3600)
    let minutos = parseInt(h / 60)
    let segundos = parseInt(r)


    return console.log(`${horas}:${minutos}:${segundos}`);
}

calcularTempo()