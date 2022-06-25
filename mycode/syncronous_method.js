const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/test.txt', "utf-8")

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the cresult ${first}, ${second}`, {flag:'a'})

console.log('starting with next task')