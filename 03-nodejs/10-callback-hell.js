function sum(x, y, callback) {
    setTimeout(
        () => {
            callback(x + y);
        }, 3000
    );
}

sum( 1,2, function(result1) {
    console.log(result1); //3 after 3secs

    sum(result1, 3, function( result2) {
        console.log(result2); //6 after 6 secs

        sum(result2, 4, function(result3) {
            console.log(result3); //10 after 9 secs
        });
    });
});