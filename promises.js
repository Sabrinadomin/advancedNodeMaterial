// let delay = (seconds) => new Promise((resolve, reject) => {
//   setTimeout(resolve, seconds*1000)
// })

let delay = (seconds) => new Promise((resolve, reject) => {
  if(seconds > 3) {
    reject(new Error('Too long'))
  }
  setTimeout(() => {
    resolve('the delay has ended')
  }, seconds*1000)
})

delay(4)
  .then((message) => {console.log(message)})
  .then(() => "I am data from the last then.")
  .then((data) => {console.log(data)})
  .catch((err) => {
    console.log('Oh no')
    console.log(err.message)
  })

console.log('End first tick')