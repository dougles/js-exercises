function weave(sourceOne, sourceTwo) {

  const qr = new Queue()
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      qr.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      qr.add(sourceTwo.remove());
    }
  }

  return qr;
}


class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}