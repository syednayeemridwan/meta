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

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}
