
/**
 * Reverse an array
 * without using and extra array or reverse method
 * You can use just a temp variable
 */
function reverseArrayInPlace(arr){
    var temp;
    var arrLength = arr.length;
    for(var i=0; i<arrLength/2; i++){
      temp = arr[i];
      arr[i] = arr[arrLength-i-1];
      arr[arrLength-i-1] = temp;
    }
    return arr;
  }
  
  console.log(reverseArrayInPlace([4,5,'ff',67,'wer']));