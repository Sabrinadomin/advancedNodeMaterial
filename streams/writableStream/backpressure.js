/*
  When the readStream sends too much data, it overflows the writeStream.
  This process, pauses the read stream until the write stream can handle that much data instead of taking up more memory.
*/

import { createReadStream, createWriteStream} from 'fs'

const readStream = createReadStream('powder-day.mp4')
const writeStream = createWriteStream('streams/writableStream/copy.mp4')

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk) //When true, means the chunk was written successfully.
  if(!result) readStream.pause() // If false, we'll pause the readStrem until this chunk is written.
})

readStream.on('end', () => {
  writeStream.end()
})

readStream.on('error', (error) => {
  console.log('An error has occured ', error)
})

writeStream.on('drain', () => {
  readStream.resume() // Resume the readStream when the chunk is written
})

writeStream.on('close', () => {
  process.stdout.write('File copied\n')
})
