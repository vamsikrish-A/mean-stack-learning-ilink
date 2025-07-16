//promise - a class intriduced in ES2015
//sum function based on the promise pattern

function sum(x, y) {
    return new Promise(
        (resolve, reject) => {
            // console.log(typeof resolve);
            // console.log(typeof reject);

            if( typeof x !== 'number' || typeof y !== 'number') {
                return reject( new Error(`At least one input was not a Number. Received  ${x}, ${y}`));

            }

            setTimeout(
                () => {
                    resolve( x + y); //we are informing the promiseobject of the result (x + y)
                }, 3000
            );
        }
    );
}

// using sum()
//then(), catch() -> 2 methods of promise class
//the moment Promise object gets the resolved value (answer), the function passed to then (f) is called
sum(1,2).then(
    function( result1) {
        console.log(result1);

        return sum(result1, 'hero'); //NOTE: Not to forget to return the primise (p5) -> after some time when we get data 6
    } // p2 (p2 is a copycat of p5) -> p2 will also resolve with value 6
).then(
    function( result2) {
        console.log(result2);

        return sum( result2, 4);
    }
).then(
    function(result3) {
        console.log(result3);
    }
). catch(
    (err) => {
        console.log(err.message);
    }
);

console.log('script ends');