

function reverse_num_mod(num) {
	const sign = Math.sign(num);
	num = sign * num;
	let r = 0;
	while (num > 0) {
		r = r * 10 + num % 10;
		num = parseInt(num / 10);
	}

	return r * sign;
}


function reverse_num_array(num) {
	const sign = Math.sign(num);
	num = sign * num;

    return parseInt(num.toString().split('').reverse().join('')) * sign;
}


