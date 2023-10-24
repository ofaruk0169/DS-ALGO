fun collectOddValues(arr: List<Int>): List<Int> {
    val newArr = mutableListOf<Int>()

    if (arr.isEmpty()) {
        return newArr
    }

    if (arr[0] % 2 != 0) {
        newArr.add(arr[0])
    }

    newArr.addAll(collectOddValues(arr.subList(1, arr.size)))
    return newArr
}

fun main() {
    val result = collectOddValues(listOf(1, 2, 3, 4, 5))
    println(result)
}
