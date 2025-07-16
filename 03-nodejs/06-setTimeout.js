setTimeout(
    () => console.log(1), 0
); // f - even though this function is eligible for execution immediately it is not executed immediately(otherwise 1 would  be printed immediately)

//Event queue ( a queue of function waiting to be executed)

console.log(2);

//Nothing ele to execute
//Now Node.js checks the event queue, and picks up the first function in the queue, and executes it
//f() -> print 1