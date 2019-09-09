//Create a function that receives an array
//and prints it out, labelling each index.

var someArray = ["KC", "StL", "LA", "NYC"];

function printArray(someArray) {
    for(i=0; i<someArray.length; i++){
        console.log(someArray.toString(i));
    }
}
printArray(someArray);