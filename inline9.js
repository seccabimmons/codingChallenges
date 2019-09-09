//Create an application to print out each
//letter of a 9 letter word on a separate line.

var nineLetterWord = "someworda";
function nineLetterWordPrinter(nineLetterWord) {
    for(i=0; i<nineLetterWord.length; i++){
    console.log(nineLetterWord.charAt(i));
    }
}

nineLetterWordPrinter(nineLetterWord);