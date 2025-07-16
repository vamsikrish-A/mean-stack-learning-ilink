// Promise - a class introduced in ES2015
// sum function based on the promise pattern
// function sumSync(x,y) {

// }

// const result = sumSync(1,2);  //get 3 synchronously - next line does not execute till result is obtained

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
    )
}

//async function doSerialOperations()
//When the first await is encountered it returns a promise

const doSerialOperations = async () => {
    try {
        console.log(3);
        const result1 = await sum(1,2); //awaits is a way for the doSerialOperations() to give up control of the main thread - return promis p
        console.log(4);
        console.log('result =', result1);
    } catch ( err ) {
        console.log(err.message);
    }

}