//return the index in which the value exists, otherwise return -1

fun binarySearch(arrayValues: IntArray, targetValue: Int): Int {
    var left = 0
    var right = arrayValues.size - 1

    while (left <= right) {
        val middle = left + (right - left) / 2 // Calculate the middle index without risk of overflow

        if (arrayValues[middle] == targetValue) {
            return middle
        } else if (arrayValues[middle] < targetValue) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return -1 // Return -1 when the element is not found
}

fun main() {
    val result = binarySearch(intArrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9), 7)
    println(result) // Output should be the index of 7, which is 6
}
