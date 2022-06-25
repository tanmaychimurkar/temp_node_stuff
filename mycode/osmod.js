const os = require('os')

//info about curr user
const user = os.userInfo()
console.log(user)

console.log(os.uptime())

const currentOS = {
    name:os.type(),
    release:os.release(),
    mem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS)
