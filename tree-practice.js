class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}



class BTS {

	constructor(value) {
		this.root = new Node(value);
	}


	insert(value) {
		const insert = (node, value) => {

			if (value < node.value) {
				if (node.left) {
					insert(node.left, value);
				} else {
					node.left = new Node(value);
				}
			}

			if (value > node.value) {
				if (node.right) {
					insert(node.right, value);
				} else {
					node.right = new Node(value);
				}
			}

		}

		insert(this.root, value);
	}


	list() {

		const traverse = (node, arr) => {
              arr.push(node.value);

              if (node.left) {
              	traverse(node.left,arr);
              }
              if (node.right) {
              	traverse(node.right, arr);
              }
		};

		const arr = [];
		traverse(this.root,arr);

		console.log(arr);
	}
}



const t = new BTS(6);

t.insert(5);
t.insert(4);
t.insert(7);
t.insert(8);
t.insert(2);
t.insert(11);
t.insert(12);
t.insert(13);
t.insert(14);
t.insert(1);
t.insert(9);

t.list();

