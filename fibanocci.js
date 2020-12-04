
//Very poor performance
//Exponential runtime of O(2^n);
//Very inefficiant when position is a big number
function fibanocci(position){
    if(position < 3){
        return 1;
    }
    return fibanocci(position - 1) + fibanocci(position - 2);
}

console.log(fibanocci(12));