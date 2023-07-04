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

console.log(maxCharacter("javascript"));

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

fizzbuzz();