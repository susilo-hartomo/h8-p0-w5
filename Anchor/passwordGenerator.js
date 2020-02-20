// function changeVocals(str) {
//     //code di sini
//     let vocal = 'aeiouAEIOU'
//     let setelahVocal = 'bfjpvBFJPV'

//     let kamus = 'bcdfghjklmnpqrstvwxyz '
//     let kamusBesar = 'BCDFGHJKLMNPQRSTVWXYZ'

//     let temp = ''
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vocal.length; j++) {
//             if (str[i] == vocal[j]) {
//                 temp += setelahVocal[j]
//             }
//         }
//         for (let k = 0; k < kamus.length; k++) {
//             if (str[i] == kamus[k]) {
//                 temp += kamus[k]
//             } else if(str[i] == kamusBesar[k]) {
//                 temp += kamusBesar[k]
//             }

//         }
//     }
//     return temp
// }

// console.log('changeVocals: ', changeVocals('Aku Suka'));

function changeVocals(str) {
    //code di sini
    
    let kamus = 'aiueoAIUEO'
    let kamusB = 'bjvfpBJVFP'
    
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        check = 1
        for (let k = 0; k < kamus.length; k++) {
            if (str[i] == kamus[k]) {
                temp += kamusB[k]
                check = 0
            }
        }
        if (check == 1) {
            temp += str[i]
        }
    }
    return temp
}

function reverseWord(str) {
    //code di sini
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        temp += str[str.length - 1 - i]
    }
    return temp
}

// console.log('reverseWord(str): ', reverseWord('str'));

function setLowerUpperCase(str) {
    //code di sini
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let temp = ''
    for (let i = 0; i < str.length; i++) {
        // console.log('str: ',i, str[i]);
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] === kamus[j]) {
                temp += kamusBesar[j]
            } else if (str[i] === kamusBesar[j]) {
                temp += kamus[j]
            }
        }
        if (str[i] == ' ') {
            temp += ' '
        }
    }
    return temp
}

// console.log('setLowerUpperCase: ', setLowerUpperCase('Aku SuKA'));

function removeSpaces(str) {
    //code di sini
    let temp = ''
    for (let index = 0; index < str.length; index++) {
        if (str[index] !== ' ') {
            temp += str[index]
        }
    }
    return temp
}
// console.log('removeSpaces: ', removeSpaces('a k u'));

function passwordGenerator(name) {
    //code di sini
    name = changeVocals(name)
    name = reverseWord(name)
    name = setLowerUpperCase(name)
    name = removeSpaces(name)

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return name
    }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'