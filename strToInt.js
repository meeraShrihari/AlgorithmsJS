function myParseInt(str){

    const numCharArr = [48,49,50,51,52,53,54,55,56,57];
  
    var sum=0;
    var div = 0;
    
    for(var i=str.length-1, pos = 1; i>=0; i--){
      const char = str.charAt(i); // '0'
      const asciiCodeForChar = char.charCodeAt(0);
      var digit = numCharArr.indexOf(asciiCodeForChar);
      if(digit === -1 && char !== '.') return null;
      if(char !== '.') {
        sum = sum + digit * pos;
        pos *= 10;
      } else {
        div = Math.pow(10,i-2);
      }
    }
    if(div !== 0) sum = sum/div;
    return sum;
  }
  
  console.log(myParseInt('123'));
  console.log(myParseInt('{}'));
  console.log(myParseInt('123abc'));
  console.log(myParseInt('123.4'));