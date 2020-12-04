/**
 * Search for a given value(key) inside of a list(numArray)
 * Runs O(log n) - Logarithemic runtime - very performant
 * Can be written in a recursive way
 */
function binarySearch(numArray, key){
    var middleIndex = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIndex];
    
    if(key === middleElem) return true;
    if(key < middleElem && numArray.length > 1){
        return binarySearch(numArray.slice(0, middleIndex), key);
    }else if(key > middleElem && numArray.length > 1){
        return binarySearch(numArray.slice(middleIndex+1, numArray.length), key);
    }
    return false;
  }
  
  console.log(binarySearch([4,5,6,7,8,9], 10));