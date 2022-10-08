var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valoresEntrada = lines[0].split(' ');

var salario = parseFloat(valoresEntrada[0])

const calculoSalario = function(salario){

    if(salario <= 400.00){
        let novoSalario = (salario + (salario * 0.15))
        let reajuste = novoSalario - salario
        let percentual = 15
        console.log(`Novo salario: ${((novoSalario).toFixed(2))}`);
        console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`);
        console.log(`Em percentual: ${percentual} %`);
    }

    else if(salario >= 400.01 && salario <= 800.00){
        let novoSalario = (salario + (salario * 0.12))
        let reajuste = novoSalario - salario
        let percentual = 12
        console.log(`Novo salario: ${(novoSalario).toFixed(2)}`);
        console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`);
        console.log(`Em percentual: ${percentual} %`);
    }

    else if(salario >= 800.01 && salario <= 1200.00){
        let novoSalario = (salario + (salario * 0.10))
        let reajuste = novoSalario - salario
        let percentual = 10
        console.log(`Novo salario: ${(novoSalario).toFixed(2)}`);
        console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`);
        console.log(`Em percentual: ${percentual} %`);
        
    }

    else if(salario >= 1200.01 && salario <= 2000.00){
        let novoSalario = (salario + (salario * 0.07))
        let reajuste = novoSalario - salario
        let percentual = 7
        console.log(`Novo salario: ${(novoSalario).toFixed(2)}`);
        console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`);
        console.log(`Em percentual: ${percentual} %`);
    }

    else if(salario > 2000.00){
        let novoSalario = (salario + (salario * 0.04))
        let reajuste = novoSalario - salario
        let percentual = 4
        console.log(`Novo salario: ${(novoSalario).toFixed(2)}`);
        console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`);
        console.log(`Em percentual: ${percentual} %`);
    }

}

calculoSalario(salario)