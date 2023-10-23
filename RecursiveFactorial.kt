fun factorial(num: Int): Int {
    if (num == 1) return 1
    return num * factorial(num - 1)
}
