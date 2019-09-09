// Program that allows you to pass in 2 last names. Based on how many characters are alike or not alike,
// give a probable match score. 60% good/ 40% bad.

var lastName1 = "Hamlett";
var lastName2 = "Ramones";
var nameSplit1 = lastName1.split();
var nameSplit2 = lastName2.split();
var result = [];

function perMatched(lastName1, lastName2) {
    for(var i=0; i<lastName1.length; i++){
        if(lastName1[i] === lastName2){
            console.log("hey I found it... I added it to the results array.");
            result.push(lastName1[i]);
            console.log(result);
        }
    }   
}
perMatched(lastName1, lastName2);