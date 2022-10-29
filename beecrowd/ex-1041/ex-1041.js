var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const entradaCoordenadas = (lines[0].split(' '))

const entradaX = parseFloat(entradaCoordenadas[0])
const entradaY = parseFloat(entradaCoordenadas[1])

console.log(entradaX);
console.log(entradaY);

function CalcularCoordenadas(){

    if(entradaX === 0.0 && entradaY === 0.0){
        console.log('Origem');
    }

    else if(entradaX > 0.0 && entradaY > 0.0){
        console.log('Q1');
    }

    else if(entradaX < 0.0 && entradaY > 0.0){
        console.log('Q2');
    }

    else if(entradaX < 0.0 && entradaY < 0.0){
        console.log('Q3');
    }

    else if(entradaX > 0.0 && entradaY < 0.0){
        console.log('Q4');
    }


    else if(entradaY === 0.0 && entradaX != 0.0){
        console.log('Eixo X');
    }

    else if(entradaX === 0.0 && entradaY != 0.0){
        console.log('Eixo Y');
    }

}

CalcularCoordenadas()