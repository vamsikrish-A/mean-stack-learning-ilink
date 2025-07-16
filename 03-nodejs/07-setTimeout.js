setTimeout(() => {
    console.log(1) //f
    
}, 0);

//Event queue: [ f ]

setTimeout(
    () => console.log(2),0 //g
);

//Event queue: [f,g]

