fun selectionSort(arr: IntArray): IntArray {
    for (i in 0 until arr.size - 1) {
        // Find the index of the minimum element in the unsorted part of the array
        var minIndex = i
        for (j in i + 1 until arr.size) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // Swap the found minimum element with the first element in the unsorted part
        val temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

fun main() {
    val arr = intArrayOf(5, 3, 54, 39, 22, 1)
    val result = selectionSort(arr)
    println(result.joinToString(", "))
}
