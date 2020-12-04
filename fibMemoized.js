
//Memoized Fibonacci
//index: index of number in fibanocci sequence
//cache: an array used as memory

//checkto see if number already exists in cache
//if number is in cache, use that number
//if number is not in cache, calculate it and put it in cache so it can be used ultiple times in future
function fibMemo(index, cache){
    cache = cache || [];
    if(cache[index]) return cache[index];
    else{
        if(index < 3) return 1;
        else{
            cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
        }
    }
    return cache[index];
}

console.log(fibMemo(1000));