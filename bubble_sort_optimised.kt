fun bubbleSort(arr: MutableList<Int>): List<Int> {
    var noSwaps: Boolean
    for (i in arr.indices.reversed()) {
        noSwaps = true
        for (j in 0 until i) {
            if (arr[j] > arr[j + 1]) {
                val temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

fun main() {
    val arr = mutableListOf(8, 1, 2, 3, 4, 5, 6, 7)
    val sortedArr = bubbleSort(arr)
    println(sortedArr)
}
