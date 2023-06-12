function reverseString(str) {
    return str  
        .split('') //split by elements of the string to make an array. (unrelated) If we had a space inbetween these quotes it would seperate by word
        .reverse() //reverses the array
        .join(''); //joins the array back 
}