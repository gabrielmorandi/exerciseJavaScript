var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])
var c = parseFloat(lines[2])
var d = parseFloat(lines[3])
var e = parseFloat(lines[4])
var f = parseFloat(lines[5])
var tPosi = 0
var qPosi = 0

function vPosi () {
    if (a > 0) {
        tPosi += 1
        qPosi += a
    }
    if (b > 0) {
        tPosi += 1
        qPosi += b
    }
    if (c > 0) {
        tPosi += 1
        qPosi += c
    }
    if (d > 0) {
        tPosi += 1
        qPosi += d
    }
    if (e > 0) {
        tPosi += 1
        qPosi += e
    }
    if (f > 0) {
        tPosi += 1
        qPosi += f
    }
    media = qPosi / tPosi
    console.log(tPosi + ' valores positivos\n' + media.toFixed(1))
}

vPosi()