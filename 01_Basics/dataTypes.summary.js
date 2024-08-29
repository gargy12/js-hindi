// datatypes 1) primitive 2) non primitive

// primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt symbol use to make any value unique

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non primitive)

let name ="hello"

let anothername = hello
anothername = "Hi"

console.log(hello);
console.log(anothername);

let user1 ={
    email: "12@gmail.com"
    upi: "user@ibl"
}

let user2 = user1

user2.email = "ww@gmail.com"
console.log(user1.email);
console.log(user2.email);



