class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) printTimeCallback();
		}, 10);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 6000);
	}

	getSeconds() {
		return Math.floor((this.currentTime % 6000) / 100);
	}

	getCentiseconds() {
		return this.currentTime % 100;
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
		let centi = this.getCentiseconds();
		return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}.${this.computeTwoDigitNumber(centi)}`;
	}
}
