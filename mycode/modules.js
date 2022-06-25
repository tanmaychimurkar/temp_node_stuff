const names = require('./modules')
const sayHi = require('./utils')

const data = require('./alt_flavor')

sayHi(names.john)
sayHi(names.susan)

sayHi('pussy')

console.log(data)

require('./mind_grenade')

