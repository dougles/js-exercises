function capitalize_loop(str) {
	let result = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {

		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i]
		}
	}

	return result;
}


function capitalize_chunk(str) {
	const result = [];
	for (let word of str.split(' ')) {
		result.push(word[0].toUpperCase() + word.slice(1));
	}

	return result.join(' ');
}

