var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines[0])

function sixOdd () {
    if (x % 2 === 0) {
        a = x + 1
        b = x + 3
        c = x + 5
        d = x + 7
        e = x + 9
        f = x + 11
        console.log(a + '\n' + b + '\n' + c + '\n' + d + '\n' + e + '\n' + f)
    }
    else {
        a = x + 2
        b = x + 4
        c = x + 6
        d = x + 8
        e = x + 10
        f = x + 12
        console.log(x + '\n' + a + '\n' + b + '\n' + c + '\n' + d + '\n' + e)
    }
}

sixOdd()