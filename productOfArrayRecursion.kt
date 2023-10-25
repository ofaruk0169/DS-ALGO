/*Write a function called productOfArray which takes in an array of numbers and returns the product of
 them all.*/

//note to self use helper recursion.

fun productOfArray(arrayValues: IntArray): Int {
    
   var total = 0
  
   fun helper(helperInput: List<Int>) {
        if (helperInput.isEmpty()) {
            return
        }
        
        total = total + helperInput[0]
       
        helper(helperInput.subList(1, helperInput.size))

   } 
   
   helper(arrayValues)
   
   return total
     
}

fun main() {
    val result = productOfArray(intArrayOf(1,2,3))
    println(result)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
