function nameHero(arr) {
    //MEMISAHKAN DANTA KOMA
    let hasil = []
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ',') {
            temp += arr[i]
        } else {
            hasil.push(temp)
            temp = ''
        }
    }
    hasil.push(temp)
    return hasil
}


function nameJenisHero(arr) {
    //MEMISAHKAN NAMA HERO DAN JENIS HERO DENGAN TNDA -
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        let namaHero = []
        let temp = ''
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != '-') {
                temp += arr[i][j]
            } else {
                namaHero.push(temp)
                temp = ''
            }
        }
        namaHero.push(temp)
        hasil.push(namaHero)
    }
    return hasil
}

function meleeRangedGrouping(str) {
    //your code here
    str = nameHero(str)
    str = nameJenisHero(str)
    let Ranged = []
    let Melee = []
    for (let i = 0; i < str.length; i++) {
        if (str[i][1] == 'Ranged') {
            Ranged.push(str[i][0])
        } else if(str[i][1] == 'Melee'){
            Melee.push(str[i][0])
        }
    }

    if (Ranged.length == 0 && Melee.length == 0) {
        return []
    } else{
        return [Ranged, Melee]
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []