var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0]
var b = lines[1]
var c = lines[2]

function animal () {
    if (a === 'vertebrado') {
        if (b === 'ave') {
            if (c === 'carnivoro') {
                console.log('aguia')
            }
        }
    }
}

animal()