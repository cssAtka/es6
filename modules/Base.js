import Config from './../Config'
import Uppercase from './../components/Uppercase'

/**
 * Abstract Base class
 */
export default class Base {
	constructor(nev) {
		this.nev = nev
	}

	greeting() {
		return 'Hello ' + this.nev
	}

/**
 * Returns test text.
 * @returns {string}
 */
	get testText() {
		let string = this.data
		if (Config.isUppercase) {
			string = Uppercase.toUpperCase(string)
		}
		return string;
	}

/**
 * Sets test text.
 */
	set testText(data) {
		this.data = data
	}
}
