fun sumRange(integer: Int): Int {
    if (integer <= 0) {
        return 0 // Base case: return 0 when integer is not positive
    } else {
        return integer + sumRange(integer - 1)
    }
}

fun main() {
    var result = sumRange(3)
    println(result)
}
