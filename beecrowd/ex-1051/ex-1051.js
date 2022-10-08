var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var salario = parseFloat(lines[0]);
const limiteImpostoOne = 2000.00
const limiteImpostoTwo = 3000.00
const limiteImpostoThree = 4500.00

if(salario > limiteImpostoThree){
   let ImpostoOne = (salario - limiteImpostoThree)
   let ImpostoTwo = (salario - ImpostoOne - limiteImpostoTwo)
   let ImpostoThree = (salario - ImpostoOne - ImpostoTwo - limiteImpostoOne)

   console.log((`R$ ${((ImpostoOne * 0.28) + (ImpostoTwo * 0.18) + (ImpostoThree * 0.08)).toFixed(2)}`));
}

else if(salario >= 3000.01 && salario <= limiteImpostoThree){
   let ImpostoOne = (salario - limiteImpostoTwo)
   let ImpostoTwo = (salario - ImpostoOne - limiteImpostoOne)
   console.log((`R$ ${((ImpostoOne * 0.18) + (ImpostoTwo * 0.08)).toFixed(2)}`));
}

else if(salario >= 2000.01 && salario <= 3000.00){
   let ImpostoOne = (salario - limiteImpostoOne)
   console.log((`R$ ${((ImpostoOne * 0.08)).toFixed(2)}`));
}

else if(salario >= 0.00 && salario <= 2000.00){
   console.log('Isento');
}