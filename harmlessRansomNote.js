/**
 * Check if all the noteText words can be created from the magazineText words.
 * All the words in the noteText should be present in the magazineText, even repeated words
 */


//Runs in Exponential time complexity
//Big O(n^2)
/*function harmlessRansomNote(noteText, magazineText){
  var noteTextArr = noteText.split(' ');
  var magazineTextArr = magazineText.split(' ');
  var count = 0;
  var multipleTextIndexes = [];
  for(var i = 0; i < noteTextArr.length; i++){
    for(var j = 0; j < magazineTextArr.length; j++){
      if(noteTextArr[i] === magazineTextArr[j] && !multipleTextIndexes.includes(j)){
        count++;
        multipleTextIndexes.push(j);
        break;
      }
    }
  }
  if(count === noteTextArr.length) console.log('All words are included');
  else console.log('Not included fully');
}
*/

//mentioned in the video
//Ideal solution
//Runs in Linear time complexity
//Big O(n)
//Or Specificallyhere since there are 2 loops for magazineArr and noteArr,
//we can say O(m) + O(n) => O(m+n) or O(n) => either way its Linear time complexity
function harmlessRansomNote(noteText, magazineText){
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    var noteIsPossible = true;
    
    //Below loop - O(m)
    magazineArr.forEach(word => {
      if(!magazineObj[word]) magazineObj[word] = 0;
      magazineObj[word]++;
    });
  
    //Below loop - O(n)
    noteArr.forEach(word => {
      if(magazineObj[word]) {
        magazineObj[word]--;
        if(magazineObj[word] < 0) noteIsPossible = false;
      }else {
        noteIsPossible = false;
      }
    })
    return noteIsPossible;
  }
  //console.log(harmlessRansomNote('my name Meera is og', 'Meera  og my wife name Meera'));
  
  if(harmlessRansomNote('this is a secret note for you from a secret admirer', 
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'))
  {
      console.log('true');
  }else console.log('false');