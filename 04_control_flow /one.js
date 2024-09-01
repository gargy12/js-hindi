// if 

// if condition is true than inner code will be executed 
// if condition is false the inner code will not be executed

// comparision operators
//< less than , > greater than , <= less than equals to ,
// >= greater than equal to , = assignment operator
// == equals to , != not equals to , === do type checking

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: $(power)`)
// }

// console.log(`User power: $(power)`);

// short hand notation

const balance = 1000

if (balance > 100) console.log("test"); // known as implicit scope execute in single line

// if (balance > 500) console.log("test"),console.log("test2"); wrong way

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} // || used to check multiple conditions
