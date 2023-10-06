function validAnagram(string1, string2){
  
    let arr1 = string1.split('');
    let arr2 = string2.split('');
  
    
    if (arr1.length !== arr2.length) {
        return false; 
    }
    
    let object1 = {}
    let object2 = {}
    
    for (let letter of arr1) {
      object1[letter] = (object1[letter] || 0) + 1    
    }
    
    for (let letter2 of arr2) {
      object2[letter2] = (object2[letter2] || 0) + 1    
    }
    
    //loop through one of the objects to see if the key freq is the same in each object 
    for (let key in object1) {
        if (object2[key] !== object1[key]) {
            return false;
        }
    }
    return true;
  }
