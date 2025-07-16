//implicitly return value of a function is the special `undefined` value
// function sum(x, y) { 

// }

// console.log( sum(1,2)); //prints undefined

function sum(x, y, callback) {
    setTimeout(
        () => { //f -> put in queue, Node picks up, executes, Node gets the answer
            console.log('inside f');
           // return x+y; //returns to node.js - useless

           callback( x + y ); //pass on the result to the callback function
        }, 3000
    );
    return undefined;
}

sum(1,2, function(result){
    console.log(result);
})


sum(3,4, function(result){
    console.log(result * result);
});