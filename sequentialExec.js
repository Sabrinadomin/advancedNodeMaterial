var fs = require('fs');
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const unlink = promisify(fs.unlink)
const delay = (seconds) => new Promise((resolve) => {
  setTimeout
  (resolve, seconds * 1000)
})

const doStuffSequentially = () => Promise.resolve()
  .then(console.log('Starting'))
  .then(() => delay(1))
  .then(() => 'Waiting')
  .then((message) => console.log(message))
  .then(() => delay(1))
  .then(() => writeFile('file.txt', 'Hello World!'))
  .then(() => console.log('file.txt created!'))
  .then(() => delay(3))
  .then(() => unlink('file.txt'))
  .then(() => console.log('file.txt removed!'))
  .then(() => delay(2))
  .then(() => console.log('Finished.'))
  .catch(err => console.log(err))

doStuffSequentially();
  
// const doStuffSequentially = () => {
//     console.log('starting');
//     setTimeout(() => {
//         console.log('waiting');
//         setTimeout(() => {
//             console.log('waiting some more');
//             fs.writeFile('file.txt', 'Sample File...', error => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     console.log('file.txt created')
//                     setTimeout(() => {
//                         fs.unlink('file.txt', error => {
//                             if (error) {
//                                 console.error(error);
//                             } else {
//                                 console.log('file.txt removed');
//                                 console.log('sequential execution complete');
//                             }
//                         })
//                     }, 3000)
//                 }
//             });
//         }, 2000)
//     }, 1000)
// }


