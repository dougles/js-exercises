function encodeSrt(str) {
	let counter = 1;
	let result = ''
	let char = str[0];

	for (let i = 1; i < str.length; i++) {
		if (str[i] === char) {
			counter++;
			if (counter > 9) {
				counter = 9;
				result = result + `${counter}${char}`;
				counter = 1;
			}

		} else {
			result = result + `${counter}${char}`
			counter = 1;
			char = str[i];
		}
	}

	result = result + `${counter}${char}`

	return result;
}