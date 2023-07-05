//This is the method where you are allowed to use Reverse function

function reverseString(str) {
    return str  
        .split('') //split by elements of the string to make an array. (unrelated) If we had a space inbetween these quotes it would seperate by word
        .reverse() //reverses the array
        .join(''); //joins the array back 
}

//This is the method without the reverse method being able to be used. 

function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i-- ) {
        reversedString = reversedString + str[i];
    }
    return reversedString;

}

// console.log(reverseString("ted"))

//How to reverse an integer. 

function reverseInteger(int) {
    //same as above. However. we need to turn it into a string first. 
    let reversedInteger = int.toString().split('').reverse().join('');
    // As we combine it is actually a string, so we use this final function with the return statement to return a number. 
    return parseInt(reversedInteger);
}

//Capitalise the first Letter in each word of the string

function capitaliseLetters(str) {
    //make everything lowercase then split by the gap between words. This will return a 3 part
    //Array, like our example "I love Javascript" will be ["i", "love", "javascript"]
    const strArr = str.toLowerCase().split(' ');

    //next we need to loop through the array of words. 
    for (let i = 0; i < strArr.length; i++) {
        // this transforms the string in each array item. And gets the first letter and uppercases it.
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
                    //then we add the rest of the array string value, substring(1) carries on from the previous
                    //substring in that it is, 1 onwards. e.g. we split javascript to get "j", now we are returning "avascript"                  
                    strArr[i].substring(1);
    }
    //we want to return the string as a string not an array so we join again.
    return strArr.join(' ');
}


//function without comments

function capitaliseLetters(str) {

    const strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
                    strArr[i].substring(1);
    }
    return strArr.join(' ');
}

// console.log(capitaliseLetters("i love javascript"));


//MAX Character, return the character that is most common in a string. 
//Omare's solution
function maxCharacter(str) {
    let characterList = {};
    let maxNum = 0;
    let maxChar = '';
    let charMap = {};

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        // debugger;
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
   
}

// console.log(maxCharacter("javascript"));

//fizzbuzz 
// 0 - 100, 3 = "fizz"
// 5 = buzz
// 3 & 5 = fizzbuzz

function fizzbuzz () {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 === 0) {
            console.log("fizz buzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}

// fizzbuzz();


//How to debug nodejs code with chatgpt
//Here's an example where we have a loop and we want to track the incrementing value using the debugger statement:
function trackIncrementingValue() {
    for (let i = 1; i <= 10; i++) {
      debugger; // Pause execution at each iteration
      console.log('Current value:', i);
    }
  }
  
  trackIncrementingValue();

//   In this example, we have a function called trackIncrementingValue that contains a loop. The loop iterates from 1 to 10 using the variable i. At each iteration, we have placed the debugger statement, which will pause the execution and allow us to inspect the value of i.

// To run this code and debug it:

// Save the code in a JavaScript file (e.g., debugExample.js).

// Open your terminal or command prompt and navigate to the directory where the file is located.

// Run the following command to start the Node.js debugger:
// node inspect debugExample.js

// The debugger will pause at the first debugger statement encountered in the loop. At this point, you can start interacting with the debugger.
// n or next: Execute the current line and move to the next line.
// c or continue: Continue execution until the next breakpoint or the end of the program.
// s or step: Step into a function call.
// o or out: Step out of the current function.
// p or pause: Pause the execution at the current point.

// To see the value of i, you can type repl and press Enter. This will start the REPL mode, allowing you to evaluate expressions.

// In the REPL mode, type i and press Enter to see the value of i. It should display 1 initially.

// To continue execution to the next iteration, type cont and press Enter.

// The debugger will pause at the second iteration. Again, you can type repl and i to see the updated value of i, which should be 2.

// Repeat the steps to continue debugging and track the incrementing value at each iteration.

// By using the debugger statement in the loop, you can observe and inspect the value of i as it increments, helping you understand how the loop behaves and verify if it is working as expected.