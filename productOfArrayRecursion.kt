/*Write a function called productOfArray which takes in an array of numbers and returns the product of
 them all.*/

//note to self use helper recursion.

fun productOfArray(arrayValues: IntArray): Int {
    
   var total = 1
  
   fun helper(helperInput: IntArray) {
        if (helperInput.isEmpty()) {
            return
        }
        
        total *= helperInput[0]
     
        helper(helperInput.sliceArray(1 until helperInput.size))

   } 
   
   helper(arrayValues)
   
   return total
     
}

fun main() {
    val result = productOfArray(intArrayOf(1,2,3, 10))
    println(result)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
