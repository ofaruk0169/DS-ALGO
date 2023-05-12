// Naive Solution 
// O(n^2)
//example array
arr = [-2, -1, 0, 1, 2, 3, 4, 5]

function sumZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            // basically will loop through each element of the array that is in front of i, if not found, the next i is used. If nothing is found,
            // will return undefined. If it is found however, it will return both values of the array within their newely created array. 
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactored Solution
// Time complexity - O(N)
//Space Complexity - O(1)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
        while(left < right) {
            let sum = arr[left] + arr[right];
            if (sum === 0) {
                return [arr[left], arr[right]];
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
}

//Count Unique Values challenge. 

[-2, -1, -1, 0, 1]

//answer should be 4 

//my attempt
function countUniqueValues(arr) {
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        j = i + 1;
        if (arr[i] === arr[j]) {
            count = count + 1;
        }
        
    }
    return count; 
}

//bad

//chatgpt help 

function countUniqueValues(array) {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          isUnique = false;
          break;
        }
      }
      
      if (isUnique) {
        count++;
      }
    }
    
    return count;
  }

  //Optimal Solution. From Instruction. 

arr = [1,1,2,3,3,4,5,6,6,7]

  function countUniqueValues(arr) {
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

//Explain this in code tomorrow I am too tired right now 