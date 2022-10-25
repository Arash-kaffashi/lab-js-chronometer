class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) printTimeCallback();
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		return this.currentTime % 60;
	}

	computeTwoDigitNumber(value) {
		return value.toString().padStart(2, "0");
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		let minutes = this.getMinutes();
		let seconds = this.getSeconds();
		return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
	}
}
