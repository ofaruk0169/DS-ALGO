fun factorial(num: Int): Int {
    var total = 1
    var i = num
    while (i > 1) {
        total *= i
        i--
    }
    return total
}
