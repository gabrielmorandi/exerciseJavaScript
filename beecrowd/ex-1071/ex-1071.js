var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var a = parseInt(lines[0])
var b = parseInt(lines[1])
var i = 0, x = 0, u = 0, n = [], t = 0

if (a > b) {
    for (i; a != b; i++){
        a--
    }
    if (b % 2 === 0) {
        x = 1
        for (u; u < i; u++) {
            if (u == x) {
                n.push(b + u)
                x += 2 
            }
        }
        for (let o = 0; o < n.length; o++) {
            t += n[o]
        }
        console.log(t)
    }
    else {
        x = 2
        for (u; u < i; u++) {
            if (u == x) {
                n.push(b + u)
                x += 2 
            }
        }
        for (let o = 0; o < n.length; o++) {
            t += n[o]
        }
        console.log(t)
    }
}

else if (b > a) {
    for (i; b != a; i++){
        b--
    }
    if (a % 2 === 0) {
        x = 1
        for (u; u < i; u++) {
            if (u == x) {
                n.push(a + u)
                x += 2 
            }
        }
        for (let o = 0; o < n.length; o++) {
            t += n[o]
        }
        console.log(t)
    }
    else {
        x = 0
        for (u; u < i; u++) {
            if (u == x) {
                n.push(a + u)
                x += 2 
            }
        }
        for (let o = 0; o < n.length; o++) {
            t += n[o]
        }
        console.log(t)
    }
}

else {
    console.log(i)
}