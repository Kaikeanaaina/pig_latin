// this will take in a string
// if string is a english, output will be pig-latin
// else if string is pig-latin, output will be english
// figure out a way how to identify what the string is

module.translator = function(string){
//if string is english
//*if(string ==='english'){
  //turn the string in bunch of arrays with no spaces
  var sentence = string;
  var sentenceArray = sentence.split(" ");
  console.log(sentenceArray);
  //loop through the array to change each word
  for(var i = 0 ; i < sentenceArray.length ; i++){
    if(sentenceArray[i].charAt(0).toLowerCase()=== ('a'||'e'||'i'||'o'||'u')){
    //loop through the index of each element in the array to figure out how it will change
      //if the word starts with (A,E,I,O,U)
      var word = sentenceArray[i].split("");
        //then add 'ay' at the end of that string
        console.log(word +'ay')
         return console.log('aloha');
    }
      //else
        // make the string into an array
        //loop through the array until it runs into (A,E,I,O,U)
          //until then push that letter to the same array
          //splice those consonants out of the array
  }
//*}    this bracket is for the if, to see if string is english








};

console.log(translator('I have a dog!'));