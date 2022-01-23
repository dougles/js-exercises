// chunk array by usung slice 
// chunk array by usung array 


function chunk_slice(arr, n) {
	const result = [];
	let index = 0
	while (index <= arr.length) {
		result.push(arr.slice(index, index + n));
		index += n;
	}

	return result;
}


function chunk_array(arr, n) {
	const result = [];

	for (let el of arr) {
		sub = result[result.length - 1];

		if (!sub || sub.length === n) {
			result.push([el]);
		} else {
			sub.push(el);
		}
	}

	return result;
}