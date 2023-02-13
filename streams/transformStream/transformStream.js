/*
  Transform Stream is a special type of duplex stream. Instead of
  passing the data to the read in the write in, the Transform stream 
  change the data.
  Used to transform data from readable streams before they are sent to writable streams.
*/

import { Transform } from 'stream'

class ReplaceText extends Transform {
  constructor(char) {
    super()
    this.replaceChar = char
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = chunk.toString()
      .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar)
    this.push(transformChunk)
    callback()
  }

  _flush(callback) {
    this.push('More stuff is being passed...')
    callback()
  }
}

const xStream = new ReplaceText('x')

process.stdin
  .pipe(xStream)
  .pipe(process.stdout)