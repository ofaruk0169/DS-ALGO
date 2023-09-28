fun countUniqueValues(arr: IntArray): Int {
    var count = 0

    for (i in arr.indices) {
        var isUnique = true

        for (j in i + 1 until arr.size) {
            if (arr[i] == arr[j]) {
                isUnique = false
                break
            }
        }

        if (isUnique) {
            count++
        }
    }

    return count
}

fun main() {
    val array = intArrayOf(1, 2, 2, 3, 4, 4, 5, 5, 6)
    val uniqueCount = countUniqueValues(array)
    println("Number of unique values: $uniqueCount")
}
