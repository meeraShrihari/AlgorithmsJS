
/*
Returns every pair of numbers from 'numArray'
that adds up to the sum
Guidelines
Result should be an array of arrays
Any number in the numArray can be used in multiple pairs
*/
//Following is Exponential runtime - O(n^2)
/*function twoSum(numArray, sum) {
  var twoSumArray = [];
  for(var i=0; i<numArray.length; i++){
    var pair = [];
    for(var j=i+1; j<numArray.length; j++){
      if(numArray[i] + numArray[j] === sum){
        pair = [numArray[i], numArray[j]];
        twoSumArray.push(pair);
      }
    }
  }
  return twoSumArray;
}
*/
//Constant runtime - O(1) - using hash table
function twoSum(numArray, sum){
    var pairs = [];
    var hashTable = [];
    for(var i=0; i<numArray.length; i++){
      var currNum = numArray[i];
      var counterpart = sum - currNum;
      if(hashTable.indexOf(counterpart) !== -1){
        pairs.push([currNum, counterpart]);
      }
      hashTable.push(currNum);
    }
    return pairs;
  }
  
  console.log(twoSum([1,6,4,5,3,3], 7));
  console.log(twoSum([40,11,19,17,-12], 28));