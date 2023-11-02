fun bubbleSort(arr: IntArray): IntArray {
    for (i in arr.size - 1 downTo 1) {
        for (j in 0 until i) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                val temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

fun main() {
    val result = bubbleSort(intArrayOf(4, 8, 2, 1, 7, 88))
    println(result.contentToString())
}
