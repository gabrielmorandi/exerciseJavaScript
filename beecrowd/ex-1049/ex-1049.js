var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var escolha1 = lines.shift().trim();
var escolha2 = lines.shift().trim();
var escolha3 = lines.shift().trim();

function animal(escolha1, escolha2, escolha3) {
  if (escolha1 == 'vertebrado' && escolha2 == 'ave' && escolha3 == 'carnivoro') {
    console.log('aguia');
  }
  if (escolha1 == 'vertebrado' && escolha2 == 'ave' && escolha3 == 'onivoro') {
    console.log('pomba');
  }
  if (escolha1 == 'vertebrado' && escolha2 == 'mamifero' && escolha3 == 'onivoro') {
    console.log('homem');
  }
  if (escolha1 == 'vertebrado' && escolha2 == 'mamifero' && escolha3 == 'herbivoro') {
    console.log('vaca');
  }
  if (escolha1 == 'invertebrado' && escolha2 == 'inseto' && escolha3 == 'hematofago') {
    console.log('pulga');
  }
  if (escolha1 == 'invertebrado' && escolha2 == 'inseto' && escolha3 == 'herbivoro') {
    console.log('lagarta');
  }
  if (escolha1 == 'invertebrado' && escolha2 == 'anelideo' && escolha3 == 'hematofago') {
    console.log('sanguessuga');
  }
  if (escolha1 == 'invertebrado' && escolha2 == 'anelideo' && escolha3 == 'onivoro') {
    console.log('minhoca');
  }
}

animal(escolha1,escolha2,escolha3)