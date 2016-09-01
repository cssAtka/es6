import Base from './modules/Base'
import Extended from './modules/Extended'

let bc = new Base('Béla')
let ec = new Extended('Józsi', 'Kovács')

// Class names to the console
console.log('Class is ready: ' + bc.constructor.name)
console.log('Class is ready: ' + ec.constructor.name)

// Test text output
console.log('string: ' + ec.testText)
