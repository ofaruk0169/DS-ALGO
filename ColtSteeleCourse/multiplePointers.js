// Naive Solution 

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
