const name = "yash-garg"
const repoCount = 10

//console.log(name + repoCount + "value");

// backticks use string interpolation in this placeholders are created and the value is directly injected into them

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // $ is used to enter values

// new is used to declare string

const gameName = new String ('Yash')


// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

const newString = gameName.substring(0 , 2)

//console.log(newString);

const anotherString = gameName.slice (-3,1)
// console.log(anotherString);

//const newStringOne  = "  hitesh   "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url ="https://yash.com/yash%20garg"

console.log(url.replace('%20', '-'))

