

/**
 * shift each letters in the string num number of times 
 * z shifted 2 times -> b
 * a shifted 2 times -> c
 * z shifted -2 times -> x
 * a shifted -2 time -> y
 * o shifted 3 times -> r
 * o shifted -1 time -> n
 */
function caesarCipher(str, num){
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';
  
    for(var i=0; i<lowerCaseString.length; i++){
      var currentLetter = lowerCaseString[i];
      if(currentLetter === ' '){
        newString += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndexAfterShift = currentIndex + num;
      if(newIndexAfterShift > 25) newIndexAfterShift = newIndexAfterShift - 26;
      else if(newIndexAfterShift < 0) newIndexAfterShift = newIndexAfterShift + 26;
      if(str[i] === str[i].toUpperCase()){
        newString += alphabet[newIndexAfterShift].toUpperCase();
      }else{
        newString += alphabet[newIndexAfterShift];
      }
    }
    return newString;
  }
  
  console.log(caesarCipher('Zoo Keeper', 2));
  console.log(caesarCipher('Big Car', -16));
  console.log(caesarCipher('Javascript', -900));