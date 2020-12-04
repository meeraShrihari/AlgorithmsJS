function sieveOfEratosthenes(num){
    var primes = [];
    primes[0] = false;
    primes[1] = false;

    for(var i=2; i<=num; i++){
        primes[i] = true;
    }

    for(var i=2; i<Math.sqrt(num); i++){
        for(j=2; j*i<=num; j++){
            primes[j*i] = false;
        }
    }

    var results = [];
    for(var i=0; i<primes.length; i++){
        if(primes[i]) results.push(i);
    }

    return results;
}

console.log(sieveOfEratosthenes(20));