console.log('[1]-arethemic.js started');

const add = (x, y) => x + y;

const multiply = (x,y) => x * y;

function addArray( arr ) {
    let sum = 0;

    for(let i=0; i< arr.length; i++) {
        sum += arr[i]
    }

    return sum;
}

module.exports= {
    add,
    addArray,
    factorial(num) {
        let fact = 0;
        for ( let i = 0; i< num.length; i++) {
            fact *= num[i];
        }

        return fact;
    }
}

console.log('[2]-arethemic.js ended');