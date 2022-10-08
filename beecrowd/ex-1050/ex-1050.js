var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dddEntrada = parseInt(lines[0])

var dddLista = {
    61: 'Brasilia', 
    71: 'Salvador', 
    11: 'Sao Paulo', 
    21: 'Rio de Janeiro', 
    32: 'Juiz de Fora', 
    19: 'Campinas', 
    27: 'Vitoria', 
    31: 'Belo Horizonte', 
}

var dddSaida = dddLista[dddEntrada]

if(dddSaida === undefined){
    console.log('DDD nao cadastrado');
}

else{
    console.log(dddSaida);
}