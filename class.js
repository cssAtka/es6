
class Base {
	constructor(name) {
		this.name = name
	}
	greeting() {
		return 'Hello ' + this.name
	}
}

class Extended extends Base {
	constructor(name, surname) {
		super(name)
		this.surname = surname
	}
	greeting() {
		return super.greeting() + ' ' + this.surname
	}
}

let bc = new Base('Béla')
let ec = new Extended('Józsi', 'Kovács')
console.log(bc.greeting())
console.log(ec.greeting())
