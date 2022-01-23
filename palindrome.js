function is_palindrome_every(str) {
	return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

function is_palindrome_reverse(str) {
	return str === str.split('').reduce((a, char) => char + a, '');
}


function is_palindrome_for(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - i - 1]) return false;
	}

	return true;
}

