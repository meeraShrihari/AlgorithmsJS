
/**
 * Print 'Fizz' if divisible by 3, 
 * Buzz if divisible by 5 and 
 * FizzBuzz if divisible by both 3 and 5
 */
function fizzBuzz(num){
    for(var i = 1; i <= num; i++){
      if(i % 15 === 0) console.log('FizzBuzz');
      else if(i % 3 === 0) console.log('Fizz');
      else if(i % 5 === 0) console.log('Buzz');
      else console.log(i);
    }
  }
  
  fizzBuzz(20);