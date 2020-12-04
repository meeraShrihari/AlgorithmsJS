
// Using regular expression to remove special characters
//O(n)
/*function isPaliandrome(word){
  word = word.replace(/[^a-zA-Z]/gi,'').toLowerCase();
  console.log(word);
  for(var i=0 ; i<word.length/2; i++){
    if(word.charAt(i) !== word.charAt(word.length-i-1)){
      return false;
    }
  }
  return true;
}*/

function isPaliandrome(word){
    word = word.toLowerCase();
    var charactersArray = word.split('');
    var validCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArray = [];
  
    charactersArray.forEach(char => {
      if(validCharactersArray.indexOf(char) > -1) lettersArray.push(char);
    });
  var actualWord = lettersArray.join('');
  var reverseWord = lettersArray.reverse().join('');
    //if(lettersArray.reverse().join('') === lettersArray.join('')){ //If used this line to compare, comparison not working
    if(reverseWord === actualWord) {
      console.log('is paliandrome');
      return true;
    }
    else {
        console.log('not a paliandrome');
        return false;
    }
  }
  
  
  
  
  //isPaliandrome("Madam, I' Adam");
  isPaliandrome('race cr');
  //isPaliandrome('Coding in Javascript');

  //console.log('Meera' === 'Meera');