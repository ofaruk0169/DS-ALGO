fun power(base: Int, exponent: Int): Int {
    if (exponent == 0) return 1
    
    return base * power(base, exponent - 1) 
}

fun main() {
    val result = power(7, 10)
    println(result)
}
