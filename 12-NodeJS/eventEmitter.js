const EventEmitter = require('events');

// Step 1: Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Step 2: Define event listeners using 'on' or 'addListener' method
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

// Step 3: Emit the event to trigger the listeners
myEmitter.emit('greet'); // Output: Hello, world!

// Example 1: Custom Event with Data
myEmitter.on('dataEvent', (data) => {
  console.log('Received data:', data);
});

myEmitter.emit('dataEvent', { message: 'This is custom data.' });
// Output: Received data: { message: 'This is custom data.' }

// Example 2: Multiple Listeners for the Same Event
myEmitter.on('multiListenerEvent', () => {
  console.log('Listener 1');
});

myEmitter.on('multiListenerEvent', () => {
  console.log('Listener 2');
});

myEmitter.emit('multiListenerEvent');
/*
Output:
Listener 1
Listener 2
*/

// Example 3: Once - Listener that Listens Only Once
myEmitter.once('onceEvent', () => {
  console.log('This listener will run only once.');
});

myEmitter.emit('onceEvent'); // Output: This listener will run only once.
myEmitter.emit('onceEvent'); // No output, the listener won't be triggered again.

// Example 4: Remove Listener
const myListener = () => {
  console.log('Listener to be removed.');
};

myEmitter.on('removeListenerEvent', myListener);
myEmitter.removeListener('removeListenerEvent', myListener);
myEmitter.emit('removeListenerEvent'); // No output, the listener has been removed.
