var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var num = parseInt(lines[0]);

function CalculoDistancia(num) {
  let carOneV = 60;

  distanciaY = (carOneV * num) / 30;

  console.log(`${distanciaY} minutos`);
}

CalculoDistancia(num)