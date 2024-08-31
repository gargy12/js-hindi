// scope keywords let var and const
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
} // block scope and gloggal scope written out of block

//{} is known as scope

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
 
function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username);
    } // known as closure
   // console.log(website);
    two()
}

one()