//merge two sorted arrays in Kotlin

fun merge(arr1: List<Int>, arr2: List<Int>): List<Int> {
    val results = mutableListOf<Int>()
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
    return results
}

fun main() {
    val mergedArray = merge(listOf(100, 200), listOf(1, 2, 3, 5, 6))
    println(mergedArray)
}
