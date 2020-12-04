/**
 * Print a sentense with each words reversed
 * The whole sentence should not be reversed
 */
function reverseWords(string){
    var wordsArr = string.split(' ');
    var reverseWordsArr = wordsArr.map(word => {
      var reversedWord = '';
      for(var i=word.length-1; i>=0; i--){
        reversedWord += word[i];
      }
      return reversedWord;
    });
    return reverseWordsArr.join(' ');
  }
  
  console.log(reverseWords('Coding Javascript'));
  console.log(reverseWords('this is a string of words'));