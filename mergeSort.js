function mergeSort(arr){
    if(arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0,middleIndex);
    var secondHalf = arr.slice(middleIndex);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  
  function merge(array1, array2){
    var result = [];
    while(array1.length && array2.length){
      var minElem;
      if(array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }
    if(array1.length) result.push(...array1);
    if(array2.length) result.push(...array2);
    return result;
  }
  
  //console.log(merge([3,5,8,20], [1,2,12,17]))
  console.log(mergeSort([11,7,4,1,15,12,3]));
  console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
  console.log(mergeSort([100, -20, 40, -30, 16, -100, -101]));
  
  
  
  // arr = [1,2,3,5,8,12]