console.log('[1]-arithmetic.js started');

const add = (x, y) => x + y;

const multiply = (x,y) => x * y;

function addArray( arr ) {
    let sum = 0;

    for(let i=0; i< arr.length; i++) {
        sum += arr[i]
    }

    return sum;
}

//IMPORTANT: AlWAYS use `module.exports`. NEVER use plain `exports

//By default: module = { exports : {} } 
//By default: exports -> {} (some object as module.exports)
//module -> { exports: { add: add, addArray: addArray, factorial:fn}}

// option 1:
module.exports.add = add;
module.exports.addArray = addArray;
module.exports.factorial = function(num) {
    let fact = 0;
        for ( let i = 0; i< num.length; i++) {
            fact *= num[i];
        }
    
        return fact;
}

// option 2: Assign a new object 
// `exports` will still refer to the same default object( isElement. {})


// module.exports= {
//     // if the property name and the initializer variable have the same identifier - `add` here, then you can simplify this way
//     //add: add
//     add,
//     addArray,
//     factorial(num) {
//         let fact = 0;
//         for ( let i = 0; i< num.length; i++) {
//             fact *= num[i];
//         }
    
//         return fact;
//     }
// }

//module.exports will be available for other to require().

console.log('[2]-arithmetic.js ended');