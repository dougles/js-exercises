function fizzbuzz(n) {

	for (let i = 1; i <= n; i++) {
		let fb = '';

		if (i % 3 === 0) {
			fb = 'fizz';
		}

		if (i % 5 === 0) {
			fb += 'buzz';
		}

		console.log(fb || i);
	}
}
