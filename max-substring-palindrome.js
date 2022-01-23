
function max_substring_palindrome(str) {
	const n = str.length;
	let max = 0;

	let leftIndex = 0;
	let leftPos;
	let rightPos;
	for (let i = 0; i < n; i++) {
		leftPos = i;
		rightPos = i + 1;
		while (leftPos >= 0 && rightPos <= n && str[leftPos] === str[rightPos]) {
			leftPos --;
			rightPos ++;
		}

		leftPos ++;
		rightPos --;

		if ((rightPos - leftPos) > max) {
			max = rightPos - leftPos;
			leftIndex = leftPos;
		}

		leftPos = i - 1;
		rightPos = i + 1;
		while (leftPos >= 0 && rightPos <= n && str[leftPos] === str[rightPos]) {
			leftPos --;
			rightPos ++;
		}

		leftPos ++;
		rightPos --;


		if ((rightPos - leftPos) > max) {
			max = rightPos - leftPos;
			leftIndex = leftPos;
		}

	}

	return str.slice(leftIndex, leftIndex + max + 1);
}