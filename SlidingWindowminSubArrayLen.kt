/*Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater 
than or equal to the integer passed to the function. If there isn't one, return 0 instead.*/

fun minSubArrayLen(nums: IntArray, target: Int): Int {
    var minLength = Int.MAX_VALUE
    var sum = 0
    var start = 0

    for (end in nums.indices) {
        sum += nums[end]
        
        while (sum >= target) {
            // Update the minimum length if a smaller subarray is found
            minLength = minOf(minLength, end - start + 1)
            
            // Move the start pointer to the right to find a smaller subarray
            sum -= nums[start]
            start++
        }
    }
    
    // If minLength is still at its initial value, no subarray found
    return if (minLength == Int.MAX_VALUE) 0 else minLength
}

fun main() {
    val nums = intArrayOf(2, 3, 1, 2, 4, 3)
    val target = 7
    val result = minSubArrayLen(nums, target)
    println("Minimum subarray length: $result") // Output: 2
}
