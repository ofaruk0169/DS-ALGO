//This is the method where you are allowed to use Reverse function

// function reverseString(str) {
//     return str  
//         .split('') //split by elements of the string to make an array. (unrelated) If we had a space inbetween these quotes it would seperate by word
//         .reverse() //reverses the array
//         .join(''); //joins the array back 
// }

//This is the method without the reverse method being able to be used. 

// function reverseString(str) {
//     let reversedString = '';
//     for (let i = str.length - 1; i >= 0; i-- ) {
//         reversedString = reversedString + str[i];
//     }
//     return reversedString;

// }

// console.log(reverseString("ted"))