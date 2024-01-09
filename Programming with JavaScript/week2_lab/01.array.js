//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

console.log('---------------------------------------------');
// Example 2
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

console.log('---------------------------------------------');
var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

