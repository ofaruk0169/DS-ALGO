fun insertionSort(arr: MutableList<Int>): List<Int> {
    var currentVal: Int
    for (i in 1 until arr.size) {
        currentVal = arr[i]
        var j = i - 1
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentVal
    }
    return arr
}

fun main() {
    val sortedList = insertionSort(mutableListOf(2, 1, 9, 76, 4))
    println(sortedList)
}
