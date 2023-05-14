//finding subset that is continious. //Useful for keeping track of a subset of data in an array/string etc. 

// Naive Solution, time complexity - O(N^2)

function maxSubarraySum(arr, num) {
    if (num > arr.length ) {
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//Walktrhough Naive Solution 


function maxSubarraySum(arr, num) {
 //failsafe, in case we need to find 3 consective integers, but we only have 1 number. Will return null. 
    if (num > arr.length ) {
        return null;
    }
    //Negative infinity will account for negative values. 
    var max = -Infinity;
    //the part "- num + 1" simply stops the loop before the last group comparison we are making. 
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        //the second for loop adds the 3 elements together into temp
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        // we then compare
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//Optimised Solution, Sliding Window Pattern. Time Complexity - O(N) 

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  
  //explained 

  function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    //this is the failsafe
    if (arr.length < num) return null;
    //This loop gets the first 3 digits and puts them into the variable, maxSum
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    //Put the max sum we obtained into this tempSum variable
    tempSum = maxSum;
    //here we take tempSum
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }