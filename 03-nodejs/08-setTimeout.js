setTimeout(
    () => {
        //f
        console.log(1);
        setTimeout(
            ()=> console.log(3),0
        );
    }, 0
);

//EQ: [f]

setTimeout(
    () => console.log( 2 ), //g
    0
);

//order of execution o/pt is 1 2 3.