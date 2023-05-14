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