/*
  It works like a real pipe! We make the data pass from one pipe to another.
*/

import { createReadStream, createWriteStream} from 'fs'

const readStream = createReadStream('powder-day.mp4')
const writeStream = createWriteStream('streams/writableStream/copy.mp4')
const userInputWriteStream = createWriteStream('streams/writableStream/userInput.txt')

readStream.pipe(writeStream).on('error', (err) => console.log(err)) // Do all of backpressure file automatically.

process.stdin.pipe(userInputWriteStream)
