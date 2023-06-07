//Freq Pattern 
// Challenge 1

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has
// corresponding value squared int he second array. The frequency of values must be the same. 

// examples

same([1, 2, 3], [4, 1, 9]) //true 
same([1,2,3], [1, 9]) //false 
same([1,2,1], [4,4,1]) //false, must be the same frequency 

//Naive Solution/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function same (arr1, arr2) {
    // we can tell immediately if the first array will work with the second based upon if the same number of array items are present. 
    if(arr1.length !== arr2.length) {
        return false;
    }
    // We then need to loop over one of the arrays, in this case array 1.  
    for(let i = 0; i < arr1.length; i++) {
        //the iteration will go through each value of array 1 and square it (arr1[i] **2)
        //indexOf will check where in the array of arr2 that squared value we jsut got resides and we put it into the value "correctIndex".
        //if "correctIndex" is equal to -1, it means that there is no corresponding squared value and we return false.
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if(correctIndex === -1) {
            return false;
        }
        //this is basically what happens if the if block fails. We splice away the index at array 2 that we found (correctIndex) and take 
        //1 value away (the second argument)
        arr2.splice(correctIndex,1)
    }
    //if we get to the end of this code block we can return true. 
    return true;
}


//Above code without comments. 
function same (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

//This solution is o(n*2) because we are looping and then the function "indexOf" is also loopin over the array which is a nested loop. This is 
//quadratic time. As N grows, the length of our array will grow 



//Frequency Counter Example/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

//Two loops is better than a nested loop. On > n*2

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    //We use 2 objects. These are used to count freq of individual values in the array. 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        //for each val in array 1 
        // we're going to add 1 to the frequency counter, or initialise it to 1. 

        // Here, we access the value, and we are equating it to something. 
        //As it has just been created, it is undefined and cannot be added to one, so the logical OR operation 
        //gives it the ability to become 0 in this case. 
        //This allows to add one in either case. 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1

    }
    //the same will be done for this for loop. The end result is an object that will tell us how many times each element occurs in that list. 
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // We then loop over the first array and see if the element in the array sqaured is IN array 2. 
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        //This just checks if the squared value of the key exists, access the value. Check the value on the initial array. 
        // If this also exists, and they are the same continue to the final reutrn. if not return false. 

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}
same([1,2,3,2], [9,1,4,4])



function validAnagram(string1, string2){
  
    let arr1 = string1.split('');
    let arr2 = string2.split('');
  
    
    if (arr1.length !== arr2.length) {
        return false; 
    }
    
   let object1 = {}
   let object2 = {}
    
    for (let letter of arr1) {
      object1[letter] = (object1[letter] || 0) + 1    
    }
    
    for (let letter2 of arr2) {
      object2[letter2] = (object1[letter2] || 0) + 1    
    }
    
    //loop through one of the arrays to see if firstly the key freq is the same in each array 
    
    for (let key of object1) {
        if (object2[key] !== object1[key]) {
            return false;
        }
    }
    return true;
  }