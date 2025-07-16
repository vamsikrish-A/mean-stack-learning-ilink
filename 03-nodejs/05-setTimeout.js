//setTimeout has executed immediately and finished execution immediately
//setTimeout() is a non-blocking function

setTimeout( //this function is executed by the runtime(Node.js)
    () => console.log(1), 2000
);

console.log(2); //executed immediately and prints 2

setTimeout(
    () => console.log(3), 1000
); //this function is executed by the runtime(Node.js)