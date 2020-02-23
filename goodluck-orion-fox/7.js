/*
Get List Movies
adalah function yang memiliki input array yang merupakan kumpulan array dengan format 
['rating', 'name', 'waktu hitungan jam',  'year']
function ini adalah modular function. bentuk dari function getListMovies DILARANG UNTUK DI UBAH 

Input dari function ini adalah object
yang menggroupkan movies berdasarkan tahunnya dan data movie sudah di sorting berdasarkan rating dan waktu berbentuk menit 

Rules :
Dilang menggunakan built-in function selain .push() 

*/


/* Function converstionTime akan mengubah value waktu dalam kumpulan array menjadi waktu format menit
Ouput array 2D:
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    ...
]
*/
function converstionTime(list) {
    // your code here..
    for (let j = 0; j < list.length; j++) {
        let hasil = []
        let temp = ''
        for (let i = 0; i < list[j][2].length; i++) {
            if (list[j][2][i] !== ':') {
                temp += list[j][2][i]
            } else {
                hasil.push(temp)
                temp = ''
            }
        }
        hasil.push(temp)

        let menitTotal = Number(hasil[0] * 60) + Number(hasil[1])
        list[j][2] = menitTotal
    }

    return list
}

// let a = converstionTime(cartoons);

/* Function sortByRating akan mengurutkan movies berdasarkan ratingnya secara descanding
ouput berupa array of array
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    [ 6, 'Hungry Bird', 120, 2013 ],
    ... 
] 
*/
function sortByRating(list) {
    // your code here..
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < i; j++) {
            if (list[i][0] > list[j][0]) {
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list
}

// let b = sortByRating(a);


/*Function groupByYear akan menggelompokkan data movies berdasarkan tahunnyanya
Ouput berupa object dengan keyname tahun dan value dari tahun adalah array of objects
format object untuk permovienya
{name : '<name>', time: '<time in minute> minutes', rating : '<rating>/10'}
*/
function groupByYear(arr) {
    // your code here..
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i][3]] == undefined) {
            obj[arr[i][3]] = []
        }
        let obj1 = {}
        obj1.name = arr[i][1]
        obj1.time = arr[i][2]
        obj1.rating = `${arr[i][0]} / 10`
        obj[arr[i][3]].push(obj1)     
    }
    
    return obj
}

// console.log('groupByYear: ', groupByYear(b));


/* Function getListMovies akan memberikan data movies yang sudah di arrage tahun dan rating, 
    dan sudah mengkonfersi waktu pada data movie berupa menit. */
function getListMovies(movie) {
    return groupByYear(sortByRating(converstionTime(movie)))
}

var cartoons = [
    [8, 'Avatar Eng', '1:30', 2015],
    [10, 'Anna & Eli', '2:30', 2013],
    [6, 'Hungry Bird', '2:00', 2013],
    [9, 'Lion Kong', '1:20', 2020],
    [5, 'Megomind', '1:15', 2015],
    [6, 'Sonyc', '2:10', 2020],
    [5, 'Zoopio', '1:20', 2015]
]

console.log(getListMovies(cartoons))
/*
{
    '2013': [
        { name: 'Anna & Eli', time: '150 minutes', rating: '10/10' },
        { name: 'Hungry Bird', time: '120 minutes', rating: '6/10' }
    ],
    '2015': [
        { name: 'Avatar Eng', time: '90 minutes', rating: '8/10' },
        { name: 'Megomind', time: '75 minutes', rating: '5/10' },
        { name: 'Zoopio', time: '80 minutes', rating: '5/10' }
    ],
    '2020': [
        { name: 'Lion Kong', time: '80 minutes', rating: '9/10' },
        { name: 'Sonyc', time: '130 minutes', rating: '6/10' }
    ]
}
*/