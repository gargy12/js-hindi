// Immediately Invoked Function Expressions (IIFE)

// to remove global scope pollution iife is used

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; used to terimnate iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Yash')