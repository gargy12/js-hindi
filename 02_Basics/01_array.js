// array
// in js array are resizable
// array elements cannot be accessed using arbitary string

const myArr = [0,1,2,3,4]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr);
// console.log(myArr["1"]);

/* shalllow copy of an object is a copy whose 
 properties share the samre references as that of objects */

 /* Deep copy of an object do not share the same refernce point */

 // myArr.push(8)
 // myArr.pop(8)

 // myArr.unshift(0)
 // myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


