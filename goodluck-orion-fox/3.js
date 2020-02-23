/*
Tic-tac-toe adalah sebuah permainan dua orang dengan matrix 3x3 yang bergiliran.
Jika ada salah satu sisi yang ada 3 kemunculan dalam bentuk
horizontal, vertical maupun diagonal, dia menang.
Kak Semmi perlu bantuanmu untuk mencari pemenang tic-tac-toe.
Jika X menang, tampilkan "X"
Jika O menang, tampilkan "O"
Jika tidak ada pemenang, tampilkan "Draw"

RULES:
Hanya boleh menggunakan built-in function .push()
Harus memakai while-loop
*/
function ticTacToe(array) {
	//good luck!
	var pemenang = 0
	//KHASUS VERTIKAT & HORIZONTAL
	for (let i = 0; i < array.length; i++) {
		if (array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
			pemenang = array[i][0]
		} else if (array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
			pemenang = array[0][i]
		}
	}

	//KHASUS DIAGONAL
	if (array[0][0] == array[1][1] && array[1][1] == array[2][2]) {
		pemenang = array[0][0]
	}
	if (array[0][2] == array[1][1] && array[1][1] == array[2][0]) {
		pemenang = array[0][2]
	}

	if (pemenang == 'X') {
		return 'X'
	} else if (pemenang == 'O') {
		return 'O'
	} else {
		return 'Draw'
	}
}

console.log(
	ticTacToe([
		['X', 'O', 'X'],
		['O', 'X', 'O'],
		['O', 'X', 'X']
	])
); //"X"

console.log(
	ticTacToe([
		['O', 'O', 'O'],
		['O', 'X', 'X'],
		['E', 'X', 'X']
	])
); //"O"

console.log(
	ticTacToe([
		['X', 'X', 'O'],
		['O', 'O', 'X'],
		['X', 'X', 'O']
	])
); //"Draw"

console.log(
	ticTacToe([
		['X', 'X', 'O'],
		['O', 'O', 'X'],
		['O', 'X', 'O']
	])
); //O

console.log(
	ticTacToe([
		['X', 'X', 'O'],
		['O', 'X', 'X'],
		['O', 'X', 'O']
	])
); //X