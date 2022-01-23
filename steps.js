function steps(n) {

	for (let i = 1; i <= n; i++) {
		console.log("#".repeat(i) + " ".repeat(n - i));
	}
}



function steps_recursive(n, rows = 0, str = '') {

	if (n === rows) return;


	if (str.length === n) {
		console.log(str);
		return steps_recursive(n, rows+1);
	}


	if (str.length < (rows + 1)) {
		str += '#';
	} else {
		str += ' ';
	}

	steps_recursive(n,rows, str);
}

steps_recursive(4);


