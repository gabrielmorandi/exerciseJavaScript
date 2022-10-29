var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var valorMonetario = parseFloat(lines[0])

let NotasMoedas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

let out = 0

console.log("NOTAS:")
for (let i = 0; i < 6; i++) {

    out = parseInt(valorMonetario / NotasMoedas[i])

    console.log(`${out} nota(s) de R$ ${(NotasMoedas[i]).toFixed(2)}`)

    valorMonetario = valorMonetario % NotasMoedas[i]

}

console.log("MOEDAS:")

for (let z = 6; z < NotasMoedas.length; z++) {
    out = parseInt(valorMonetario / NotasMoedas[z])

    console.log(`${out} moeda(s) de R$ ${(NotasMoedas[z]).toFixed(2)}`)

    valorMonetario = (valorMonetario % NotasMoedas[z] + 0.00001)

}