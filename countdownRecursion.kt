fun countdown(num: Int) {
    if (num >= 0) {
        println(num)
        countdown(num - 1)
    } else {
        println("Liftoff")
    }
}

fun main() {
    countdown(9)
}
