function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				const lesser = a[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = lesser;
			}
		}
	}
}


function sortBySel(arr) {

	for (let i = 0; i < arr.length; i++) {
		let indexMin = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexMin]) {
				indexMin = j
			}
		}

		if (indexMin !== i) {
			const lesser = a[indexMin];
			arr[indexMin] = arr[i];
			arr[i] = lesser;
		}
	}

}