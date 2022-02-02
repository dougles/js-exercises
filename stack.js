class Stack {

	constructor() {
		this.data = [];
	}

	push(item) {
		this.data.push(item);
	}
	pop() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}


class Queue {

	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	push(item) {
		this.s1.push(item)
	}
	pop() {

		while (this.s1.peek()) {
			this.s2.push(this.s1.pop())
		}

		const result = this.s2.pop();

		while (this.s2.peek()) {
			this.s1.push(this.s2.pop())
		}

		return result;
	}

	peek() {
		while (this.s1.peek()) {
			this.s2.push(this.s1.pop())
		}

		const result = this.s2.peek();

		while (this.s2.peek()) {
			this.s1.push(this.s2.pop())
		}

		return result;
	}
}