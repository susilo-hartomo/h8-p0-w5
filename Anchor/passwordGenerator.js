function changeVocals(str) {
    //code di sini
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (str[i] == kamus[j]) {
                temp += kamus[j + 1]
            } else if ((str[i] == kamus[j].toUpperCase())) {
                temp += kamus[j + 1].toUpperCase()
            } else if (str[i] == ' ') {
                temp += ' '
            }
        }
    }
    return temp
}

console.log('changeVocals: ', changeVocals('Aku Suka'));

function reverseWord(str) {
    //code di sini
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        temp += str[str.length - 1 - i]
    }
    return temp
}

console.log('reverseWord(str): ', reverseWord('str'));

function setLowerUpperCase(str) {
    //code di sini
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        // console.log('str: ',i, str[i]);
        if (str[i] === str[i].toUpperCase()) {
            temp += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            temp += str[i].toUpperCase()
        }
    }
    return temp
}

console.log('setLowerUpperCase: ', setLowerUpperCase('Aku SuKA'));

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
console.log('removeSpaces: ', removeSpaces('a k u'));

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