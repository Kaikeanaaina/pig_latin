// this will take in a string
// if string is a english, output will be pig-latin
// else if string is pig-latin, output will be english
// figure out a way how to identify what the string is

//module.

var translator = function(string){
//if string is english
//*if(string ==='english'){
  //turn the string in bunch of arrays with no spaces
  var sentence = string;
  var sentenceArray = sentence.split(" ");
  var translatedToPigLatinArray =[];

  //loop through the array to change each word


  for(var i = 0 ; i < sentenceArray.length ; i++){
    if(sentenceArray[i].charAt(0).toLowerCase()=== 'a'||
      sentenceArray[i].charAt(0).toLowerCase()=== 'e'||
      sentenceArray[i].charAt(0).toLowerCase()=== 'i'||
      sentenceArray[i].charAt(0).toLowerCase()=== 'o'||
      sentenceArray[i].charAt(0).toLowerCase()=== 'u'){

    //loop through the index of each element in the array to figure out how it will change
      //if the word starts with (A,E,I,O,U)
      var vowelWords = sentenceArray[i].split("");   //***** ERROR!!! it's been giving me the wrong thing

      vowelWords.push('ay');
      var makeOneString = vowelWords.join('');
      translatedToPigLatinArray.push(makeOneString);

        //then add 'ay' at the end of that string

    } //if statement


    else {

        // make the string into an array
        var consonantsWord = sentenceArray[i].split("");

        //loop through the array until it runs into (A,E,I,O,U)

        for(var j = 0;j<consonantsWord.length;j++){
          if(consonantsWord[0].toLowerCase() !== 'a'||
            consonantsWord[0].toLowerCase() !== 'e' ||
            consonantsWord[0].toLowerCase() !== 'i' ||
            consonantsWord[0].toLowerCase() !== 'o'||
            consonantsWord[0].toLowerCase() !== 'u'){
          //until then push that letter to the same array
          //splice those consonants out of the array
            consonantsWord.push(consonantsWord[0]);
            consonantsWord.splice(0,1);

          }//if

          else if(consonantsWord[0].charAt(0).toLowerCase()=== 'a'||
            consonantsWord[0].charAt(0).toLowerCase()=== 'e'||
            consonantsWord[0].charAt(0).toLowerCase()=== 'i'||
            consonantsWord[0].charAt(0).toLowerCase()=== 'o'||
            consonantsWord[0].charAt(0).toLowerCase()=== 'u'){
console.log('hi');
            consonantsWord.push('ay');
            var makeOneNadaString = consonantsWord.join('');

            return makeOneNadaString;
            //translatedToPigLatinArray.push(makeOneNadaString);
          }//else

        } //inner for







    } //else


  } //the for loop




//*}    this bracket is for the if, to see if string is english








};

console.log(translator('I have a dog!'));