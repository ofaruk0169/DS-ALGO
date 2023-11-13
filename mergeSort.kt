fun merge(arr1: IntArray, arr2: IntArray): IntArray {
    val results = ArrayList<Int>()
    var i = 0
    var j = 0
    while (i < arr1.size && j < arr2.size) {
        if (arr2[j] > arr1[i]) {
            results.add(arr1[i])
            i++
        } else {
            results.add(arr2[j])
            j++
        }
    }
    while (i < arr1.size) {
        results.add(arr1[i])
        i++
    }
    while (j < arr2.size) {
        results.add(arr2[j])
        j++
    }
    return results.toIntArray()
}

fun mergeSort(arr: IntArray): IntArray {
    if (arr.size <= 1) return arr
    val mid = arr.size / 2
    val left = mergeSort(arr.sliceArray(0 until mid).toIntArray())
    val right = mergeSort(arr.sliceArray(mid until arr.size).toIntArray())
    return merge(left, right)
}

fun main() {
    val result = mergeSort(intArrayOf(10, 24, 76, 73))
    println(result.contentToString())
}
