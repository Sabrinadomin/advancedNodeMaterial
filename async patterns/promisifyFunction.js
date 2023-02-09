let { promisify } = require('util')
//Promisify is used to convert a callback function in a promise function
let fs = require('fs')

const writeFile = promisify(fs.writeFile)

writeFile('sample.txt', 'This is a sample')
  .then(() => console.log('File successfully created.'))
  .catch(err => console.log(err.message))

// let delay = (seconds, callback) => {
//   if(seconds > 3) {
//     callback(new Error(`${seconds} seconds is too long`))
//   } else {
//     setTimeout(() => 
//       callback(null,`${seconds} seconds delay is over`),
//       seconds 
//     )
//   }
// }

// let promiseDelay = promisify(delay)

// promiseDelay(2)
//   .then(console.log('ok'))
//   .catch((err) => {
//     console.log(err)
//   }) //After promisify error handling

// delay(4, (error, message) => {
//   if(error) {
//     console.log(error.message)
//   } else {
//     console.log(message)
//   }
// }) //Before promisify error handling