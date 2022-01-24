function vowels_regex(str) {
	const found = str.match(/[aeiou]/gi);
	return found ? found.length : 0;
}


function vowels_check(str) {
	let count = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str) {
		count = count + (vowels.includes(char) ? 1 : 0);
	}

	return count;
}
