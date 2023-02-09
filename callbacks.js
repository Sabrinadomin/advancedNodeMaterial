// function hideString(str, done) {
//   process.nextTick(() => {
//     done(str.replace(/[a-zA-Z]/g, "X")) //This is a callback
//   })
// }

// let hidden = hideString("Hello World", (hidden) => {
//   console.log(hidden)
// })

// console.log('end')

function delay(seconds, callback) {
  setTimeout(callback, seconds*1000)
}

console.log('starting delay')
delay(2, () => {
  console.log('2 seconds after')
  delay(1, () => {
    console.log('3 seconds after')
  })
})

console.log('other')
/* Explication

In Node.js, process.nextTick() is a method that allows you to schedule a callback function to be executed as soon as possible,
but after the current operation has completed. It's similar to setTimeout(fn, 0), but it will be executed before any timers set
with setTimeout() or setInterval().

process.nextTick() adds the callback function to the event queue, so it will be executed after the current stack is cleared, but
before any other I/O events. This means that it will be executed before any other events that are scheduled with setTimeout() or
setImmediate().

Here's an example of how you can use process.nextTick():

console.log("Start");

process.nextTick(() => {
  console.log("Callback 1");
});

console.log("Middle");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

process.nextTick(() => {
  console.log("Callback 2");
});

console.log("End");

In this example, the output will be:
"Start", "Middle", "End", "Callback 1", "Callback 2", "Timeout 1"

As you can see, the process.nextTick callbacks are executed before the setTimeout callback, even though setTimeout callback has a 0ms delay.

process.nextTick() is useful for scheduling non-blocking operations, such as I/O, that should be executed as soon as possible but without
blocking the event loop. It's also useful for scheduling callbacks that need to be executed before any other I/O events.
*/

