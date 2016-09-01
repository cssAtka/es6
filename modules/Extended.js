import Base from './Base'

/**
 * Extended class
 */

export default class Extended extends Base {
	constructor(nev, surname) {
		super(nev)
		this.surname = surname
		this.testText = 'test text'
	}

	greeting() {
		return super.greeting() + ' ' + this.surname
	}
}