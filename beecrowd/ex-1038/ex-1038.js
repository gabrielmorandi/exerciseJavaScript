var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valoresEntrada = lines[0].split(' ');

var codigo = (valoresEntrada[0])
var quantidade = (valoresEntrada[1])

const total = function(codigo,quantidade){

    if(codigo == 2){
        valor = (quantidade * 4.50).toFixed(2)
        console.log(`Total: R$ ${valor}`);
    }
    
    else if(codigo == 3){
        valor = (quantidade * 5).toFixed(2)
        console.log(`Total: R$ ${valor}`);
    }

    else if(codigo == 4){
        valor = (quantidade * 2).toFixed(2)
        console.log(`Total: R$ ${valor}`);
    }

    else if(codigo == 5){
        valor = (quantidade * 1.50).toFixed(2)
        console.log(`Total: R$ ${valor}`);
    }

    else if(codigo == 1){
        valor = (quantidade * 4).toFixed(2)
        console.log(`Total: R$ ${valor}`);
    }

    else{
        console.log('Entrada Inválida!');
    }

}

total(codigo,quantidade)