// ReferenceError
// try {
//     throw new ReferenceError();
// } catch (error) {
//     console.log("Reference error caught");
// }
// finally{
//     console.log("Error or not, I will be executed");
// }
// console.log(username);

// SyntaxError
// throw new SyntaxError();
// var a "there's no assignment operator here";

// TypeError
// throw new TypeError();
// "hello".pop();

// RangeError
// throw new RangeError();
// (10).toString(2);


// Generic error
// var a = 5;
// var b = "what?!!"
// try { if (typeof(a)=== typeof(1) && typeof(b)=== typeof(1)  ) {
//     console.log(a + b);
// } else {
//     throw new Error();
// }
    
// } catch (error) {
//     console.log("a and b should be numbers");
// }

// Bypassing error
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")
