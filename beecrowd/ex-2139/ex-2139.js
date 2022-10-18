var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var datas = []

for (let i = 0; i < lines.length; i++) {
    let dias = {}
    let a = lines[i].split(' ')
    let m = a[0]
    let d = a[1]
    dias.m = m
    dias.d = d
    datas.push(dias)
}

for (let u = 0; u < datas.length; u++) {
    if (datas[u].m == 12 && datas[u].d == 25) {
        console.log('E natal!')
    }
    
    if (datas[u].m == 12 && datas[u].d == 24) {
        console.log('E vespera de natal!')
    }
    
    if (datas[u].m == 12 && datas[u].d > 25) {
        console.log('Ja passou!')
    }
    
    if (datas[u].m == 12 && datas[u].d < 24) {
        x = 25 - datas[u].d
        console.log('Faltam ' + x + ' dias para o natal!')
    }
    
    if (datas[u].m != 12) {
        if (datas[u].m == 1) {
            dm = 31 - datas[u].d
            da = (360 - 31) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }
        
        else if (datas[u].m == 2) {
            dm = 29 - datas[u].d
            da = (360 - 60) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 3) {
            dm = 31 - datas[u].d
            da = (360 - 91) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 4) {
            dm = 30 - datas[u].d
            da = (360 - 121) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 5) {
            dm = 31 - datas[u].d
            da = (360 - 152) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 6) {
            dm = 30 - datas[u].d
            da = (360 - 182) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 7) {
            dm = 31 - datas[u].d
            da = (360 - 213) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 8) {
            dm = 31 - datas[u].d
            da = (360 - 244) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 9) {
            dm = 30 - datas[u].d
            da = (360 - 274) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 10) {
            dm = 31 - datas[u].d
            da = (360 - 305) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }

        else if (datas[u].m == 11) {
            dm = 30 - datas[u].d
            da = (360 - 335) + dm
            console.log('Faltam ' + da + ' dias para o natal!')
        }
    }
}