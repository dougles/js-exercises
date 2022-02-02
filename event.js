class {
	constructor() {
		this.events = {};
	}

	on(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName] = [callback]
		} else {
			this.events[eventName].push(callback);
		}
	}

	trigger(eventNme) {
		if (this.events[eventName]) {
			for (let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	off(eventName) {
		delete this.events[eventName];
	}
}