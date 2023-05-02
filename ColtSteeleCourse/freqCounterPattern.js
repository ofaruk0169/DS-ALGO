// Challenge 1

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has
// corresponding value squared int he second array. The frequency of values must be the same. 

// examples

same([1, 2, 3], [4, 1, 9]) //true 
same([1,2,3], [1, 9]) //false 
same([1,2,1], [4,4,1]) //false, must be the same frequency 

//Naive Solution

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