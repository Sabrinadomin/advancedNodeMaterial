import fs from 'fs'

const readStream = fs.createReadStream('powder-day.mp4')

readStream.on('data', (chunk) => {
  console.log('reading little chunk ', chunk)
  console.log('size:', chunk.length)
})

readStream.on('end', () => {
  console.log('Finish')
})

readStream.on('error', (error) => {
  console.log('An error has occured ', error)
})

readStream.pause()

process.stdin.on('data', (chunk) => { // Get the input and shows a chunk per input
  const text = chunk.toString().trim()
  if(text === 'finish') readStream.resume() //resume the stream that is paused.
  console.log(text)
  readStream.read()
})