import { createReadStream, createWriteStream} from 'fs'
import { PassThrough, Duplex } from 'stream'

const readStream = createReadStream('streams/readableStream/powder-day.mp4')
const writeStream = createWriteStream('streams/duplexStream/copy.mp4')

class Throttle extends Duplex {
  constructor(ms) {
    super()
    this.delay = ms
  }

  _write(chunk, encoding, callback) {
    this.push(chunk)
    setTimeout(callback, this.delay)
  }

  _read() {}

  _final() {
    this.push(null)
  }
}

const report = new PassThrough() // Used to report the current situation of data.
const throttle = new Throttle(100)

let total = 0
report.on('data', (chunk) => {
  total += chunk.length
  console.log('Bytes: ' + total)
})
readStream //  It works like a real pipe! We make the data pass from one pipe to another.
  .pipe(throttle) //Put a 10 seconds delay on write method.
  .pipe(report) //Show total bytes that passed on stream
  .pipe(writeStream).on('error', (err) => console.log(err))