import { createReadStream, createWriteStream} from 'fs'

const readStream = createReadStream('readableStream/powder-day.mp4')
const writeStream = createWriteStream('writableStream/copy.mp4')

readStream.on('data', (chunk) => {
  writeStream.write(chunk)
})

readStream.on('end', () => {
  writeStream.end()
})

readStream.on('error', (error) => {
  console.log('An error has occured ', error)
})

writeStream.on('close', () => {
  process.stdout.write('File copied\n')
})
