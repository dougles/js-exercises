function fibo(n, a = 0, b = 1, r = []) {
	if (n == 0) {
		r.push(a)
		return r;
	} else {
		r.push(a)
		return fibo(n - 1, b, b + a, r);
	}
}



function fibo_for(n) {
	let a = 0;
	let b = 1
	for (let i = 1; i <= n; i++) {
		[a, b] = [b, b + a]
	}

	return a;
}



function fibo_recursive(n) {
	if (n < 2) {
		return n;
	}

	return fibo_recursive(n - 1) + fibo_recursive(n - 2);
}



function fibo_recursive_mem(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	}
}

const fib = memoize(fibo_recursive_mem); 

