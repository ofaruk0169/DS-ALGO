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
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}