// Logic Challenge - Most Frequent Largest Numbers
// Problem
// Implementasikan function sortingdan getTotaluntuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sortingdan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    // code di sini
    for (let i = 1; i < arrNumber.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                var temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    var banyakNumber = {}
    for (let i = 0; i < arrNumber.length; i++) {
        if (banyakNumber[arrNumber[i]] == undefined) {
            banyakNumber[arrNumber[i]] = 0
        }
        banyakNumber[arrNumber[i]]++
    }
    var nilaiTinggi = arrNumber[0]

    if (nilaiTinggi !== undefined) {
        return `angka paling besar adalah ${nilaiTinggi} dan jumlah kemunculan sebanyak ${banyakNumber[nilaiTinggi]} kali}`
    } else {
        return " '' "
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''