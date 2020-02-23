/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.

RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()

*/

//Tulislah Pseudocode disini
/**
 * FUNTION (ARR1, AAR2)
 * VAR temp = []
 * FOR i =0 to ARR1 LENGTH
 *      FOR j =0 to ARR2 LENGTH
*           IF (ARR1[i] == ARR2 [j]){
*           FOR k=0 temp length
*                IF ARR2[j] == temp[k]{
*                 temp PUSH ARR2[j]  // agak berbeda dengan coding
*                }
*           }
*            END IF
        END FOR
    END FOR

    IF temp length == ARR1 length {
        RETURN true
    } ELSE {
        RETURN false
    }
    END IF
 */

function subset(arr1, arr2) {
    //tulis function disini
    var temp = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                temp.push(arr2[j])
            }
        }
    }
    console.log(temp);

    var temp2 = []
    for (let k = 0; k < temp.length; k++) {
        check = true // CHECK KETUKAR DI ATAS FOR 
        for (let l = 0; l < temp2.length; l++) {
            // console.log(temp[k], '==');
            // console.log(temp2[l], '---');
            if (temp[k] == temp2[l]) {
                check = false
            }
        }
        // console.log(check);

        if (check == true) {
            temp2.push(temp[k])
        }
        // console.log(temp2);

    }

    // console.log(temp2);

    if (temp2.length == arr1.length) {
        return true
    } else {
        return false
    }
}

console.log(subset([3, 9, 5], [1, 3, 9, 5, 8, 44])); //true
console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false