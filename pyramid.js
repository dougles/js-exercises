function pyramid_raw(n) {
	const cols = n * 2 - 1;

	for (let i = 1; i <= n; i++) {
		let str = '';
		for (let j = 1; j <= cols; j++) {
			const r = 2 * i - 1;
			if (j > (cols - r) / 2 && j <= (r + (cols - r) / 2)) {
				str += '#';
			} else {
				str += '_';
			}
		}

		console.log(str);

	}
}


function pyramid_middle(n) {
	const middle = Math.floor((2 * n - 1) / 2);

	for (let row = 0; row < n; row++) {
		let str = '';
		for (let col = 0; col < (2 * n - 1); col++) {
			if (col >= (middle - row) && col <= (middle + row)) {
				str += '#';
			} else {
				str += '_';
			}
		}
		console.log(str);
	}
}

function pyramid_recursive(n, row = 0, str = '') {
	if (n === row) return;

	if (str.length === n * 2 - 1) {
		console.log(str);
		return pyramid_recursive(n, row + 1);
	}

	const middle = Math.floor((2 * n - 1) / 2);
	if (str.length >= (middle - row) && str.length <= (middle + row)) {
		str += '#';
	} else {
		str += ' ';
	}

	pyramid_recursive(n, row, str);
}
