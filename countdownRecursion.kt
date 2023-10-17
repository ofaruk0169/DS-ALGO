fun countdown(num: Int): Int {
    if (num <= 0) {
        
    }
   	num--
    countdown(num)
    
}

fun main() {
    val result = countdown(9)
    if (result == 0) {
    	println("Complete")    
    }
    
}
