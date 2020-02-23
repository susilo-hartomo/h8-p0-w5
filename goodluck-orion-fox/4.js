/*
GET TEMAN
function getTeman menerima 2 paramater yang pertama adalah array of strings dan yg ke 
parameter kedua adalah string.
function ini akan mencari teman yang memiliki nomer indonesia dan gendernya laki-laki

Rules: 
 Dilarang menggunakan built-in function selain .push()
*/

function pemisahKoma(template) {
    // MEMISAHKAN TEMPLATE DARI (,)
    var templateHasil = []
    var temp = ''
    for (let i = 0; i < template.length; i++) {
        if (template[i] !== ',') {
            temp += template[i]
        } else {
            templateHasil.push(temp)
            var temp = ''
        }
    }
    templateHasil.push(temp)

    return templateHasil
}

function getTeman(data, template) {
    // your code here..

    var template = pemisahKoma(template)
    // console.log('template: ', template);
    var dataHasil = []
    for (let i = 0; i < data.length; i++) {
        // console.log('data: ', data[i]);
        var obj = {}
        var dataUser = pemisahKoma(data[i]);
        // console.log('dataUser: ', dataUser);
        for (let j = 0; j < template.length; j++) {
            if (j==0) {
                obj['fullName'] = `${dataUser[j]} ${dataUser[j+1]}`
                // console.log('obj: ', obj);
                j++
            } else {
                obj[template[j]] = dataUser[j]
            }
        }
        // delete obj.firstName
        // delete obj.lastName
        dataHasil.push(obj)
    }

    var dataFinal = []
    for (let i = 0; i < dataHasil.length; i++) {
        if (dataHasil[i].gender == 'Male' && dataHasil[i].phone[2] == '2') {
            dataFinal.push(dataHasil[i])
        }
        
    }
    return dataFinal
}

const datas = [
    "Claudette,Dreng,Female,+63-952-343-8477",
    "Wilton,Jarville,Male,+62-388-568-9918",
    "Cosette,Jachimczak,Female,+351-759-588-8682",
    "Verne,Antunes,Male,+62-459-995-2535"
]


console.log(getTeman(datas, "firstName,lastName,gender,phone"))
// [
//     {
//       fullName: 'Wilton Jarville',
//       gender: 'Male',
//       phone: '+62-388-568-9918'
//     },
//     {
//       fullName: 'Verne Antunes',
//       gender: 'Male',
//       phone: '+62-459-995-2535'
//     }
// ]