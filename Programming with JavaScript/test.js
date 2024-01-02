// console.log("He says 'Hi!!'");
// var x = "Abir";
// console.log("Hey", x)

// console.log(2+3+4);
// console.log(10-5);
// console.log(10/3);
// console.log(3*10);
// console.log(3>2);
// console.log(3<2);
// console.log(10==10);
// console.log(12 % 8);
// console.log(3 ** 3);


// Compare only values
// console.log(100=="100");
// console.log(100!="100");
// Compare both value and data type
// console.log(100==="100");
// console.log(100!=="100");

// If-else
// if (1==2) {
//     console.log("Hello");
// } else {
//     console.log("No");
// }

// Switch
// var a=2;
// switch (a) {
//     case 1:
//         console.log('case 1 executed');
//         break;
//     case 2:
//         console.log("case 2 executed");
//         break;
//    case 3:
//         console.log("case 3 executed");
//         break;
//     case 4:
//         console.log("case 4 executed");
//         break;
//     default:
//         console.log("default case executed");
// }

// For loop
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// for (let index = 10; index > 0; index--) {
    // console.log(index)
// }

// While loop
// let b = 0;
// while (b < 10) {
//   console.log(b);
//   b++;
// }

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}