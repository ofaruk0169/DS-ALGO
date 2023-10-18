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


/////alternative method JavaScript style and why KOtlin stlye doesn't translate the same/////

fun countdown(num: Int) {
    var mutableNum = num // Declare a mutable variable to store the decremented value
    if (mutableNum <= 0) {
        println("LIFTOFF")
    } else {
        println(mutableNum)
        mutableNum--
        countdown(mutableNum)
    }
}

fun main() {
    countdown(9)
}
