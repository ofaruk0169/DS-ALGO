fun collectOddValues(arr: List<Int>): List<Int> {
    val result = mutableListOf<Int>()

    fun helper(helperInput: List<Int>) {
        if (helperInput.isEmpty()) {
            return
        }

        if (helperInput[0] % 2 != 0) {
            result.add(helperInput[0])
        }

        helper(helperInput.subList(1, helperInput.size))
    }

    helper(arr)

    return result
}

fun main() {
    val oddValues = collectOddValues(listOf(1, 2, 3, 4, 5, 6, 7, 8, 9))
    println(oddValues)
}
