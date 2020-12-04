function maxStockProfit(numArr){
    var min = numArr[0];
    var max = numArr[0];
    for(var i=1; i<numArr.length; i++){
      if(min > numArr[i]) min = numArr[i];
      if(max < numArr[i]) max = numArr[i];
    }
    return [max,min];
}

var numArr = [5,3,88,234,56,27,3,8];
var minMax = maxStockProfit(numArr);
console.log(`Min : ${minMax[0]} & Max : ${minMax[1]}`);