var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
    let linha = lines.shift();
    var [t, v] = linha.split(' ');

    if (t && v) {
        parseInt(t);
        parseInt(v);
        if ((t * v) * 2 == -0) {
            console.log(0);
        } else {
            console.log((t * v) * 2);
        }
    }
}