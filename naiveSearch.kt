fun naiveSearch(long: String, short: String): Int {
    var count = 0
    for (i in 0 until long.length - short.length + 1) {
        var match = true
        for (j in 0 until short.length) {
            if (short[j] != long[i + j]) {
                match = false
                break
            }
        }
        if (match) {
            count++
        }
    }
    return count
}

fun main() {
    val longString = "lorie loled"
    val shortString = "lol"
    val result = naiveSearch(longString, shortString)
    println("Number of occurrences: $result")
}
