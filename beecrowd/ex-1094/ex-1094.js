var input = require("fs").readFileSync("./stdin", "utf8")
var lines = input.split("\n")

let quantidadeCasos = lines[0]

let count = 0
let countCoelhos = 0
let countRatos = 0
let countSapos = 0

for (let i = 1; i <= quantidadeCasos; i++) {
  let quantidadeCobaias = lines[i].split(" ")[0]
  let tipoCobaia = lines[i].split(" ")[1]

  if (quantidadeCobaias >= 1 && quantidadeCobaias <= 15) {
    count += parseInt(quantidadeCobaias)
  }

  if (tipoCobaia) {
    if (tipoCobaia[0] === "C") {
      countCoelhos += parseInt(quantidadeCobaias)
    }
    if (tipoCobaia[0] === "R") {
      countRatos += parseInt(quantidadeCobaias)
    }
    if (tipoCobaia[0] === "S") {
      countSapos += parseInt(quantidadeCobaias)
    }
  }
}

console.log(`Total: ${count} cobaias`)
console.log(`Total de coelhos: ${countCoelhos}`)
console.log(`Total de ratos: ${countRatos}`)
console.log(`Total de sapos: ${countSapos}`)

let porcentCoelhos = (countCoelhos / count) * 100
let porcentRatos = (countRatos / count) * 100
let porcentSapos = (countSapos / count) * 100

console.log(`Percentual de coelhos: ${porcentCoelhos.toFixed(2)} %`)
console.log(`Percentual de ratos: ${porcentRatos.toFixed(2)} %`)
console.log(`Percentual de sapos: ${porcentSapos.toFixed(2)} %`)
