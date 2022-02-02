class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}


class LinkedList {

	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			node = node.next;
			counter++;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}
	getLast() {
		let node = this.head;
		while (node && node.next) {
			node = node.next;
		}

		return node;
	}

	clear() {
		this.head = null;
	}


	removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
	}

	removeLast() {
		if (!this.head) return;

		if (!this.head.next) {

			this.head = null
			return;
		}


		let previus = this.head
		let node = this.head.next;
		while (node.next) {
			previus = node;
			node = node.next;
		}

		previus.next = null;
	}

	insertLast(el) {
		let last = getLast();

		if (last) {
			last.next = new Node(el);
		} else {
			this.head = new Node(el);
		}
	}

	getAt(index) {
		let pos = 0;
		let node = this.head;

		while (node) {
			if (pos === index) return node;
			pos++;
			node = node.next
		}


		return null;
	}

	removeAt(index) {
		if (!this.head) return;

		if (index === 0) {
			this.head = this.head.next;
		}

		const previus = this.getAt(index - 1);

		if (!previus || previus.next) return;

		previus.next = previus.next.next;

	}

	insertAt(data, index) {

		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (idex === 0) {

			this.head = new Node(data, this.head);
			return;
		}


		const previus = this.getAt(idenx - 1) || this.getLast();

		previus.next = new Node(data, previus.next);

	}


	forEach(fn) {
		let index = 0
		let node = this.head;
		while (node) {

			fn(node, index);
			node = node.next
			idnex++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next
		}
	}
}



function midPoint(l) {
	let slow = l.getFirst();
	let fast = l.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.netx;
		fast = fast.next.next;
	}

	return slow;
}

function circular(l) {
	let slow = l.getFirst();
	let fast = l.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.netx;
		fast= fast.next.next;

		if (slow === fast) return true;
	}

	return false;
}



function fromLast(list, n) {
	let slow = l.getFirst();
	let fast = l.getFirst();

   while(n > 0 && fast) {
   	fast = fast.next;
   	n--;
   }
     

	while (fast.next) {
		slow = slow.netx;
		fast = fast.next;
	}

	return slow;
}

