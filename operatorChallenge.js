var myString = "this string var";
var mySecondString = "not much";
var myNumber = myString.length + mySecondString.length;
var name1 = "Rebecca";
var name2 = "Chris";
console.log(myString.substring(0,2));
console.log(mySecondString.substring(0,2));

var reverseString = myString.split("").reverse().join("");
console.log(reverseString);

function isLarger(name1, name2) {
    if (name1.length> name2.length) {
        document.getElementById("demo1").innerHTML=name1+" is longer than "+ name2;
    }
    else{
        document.getElementById("demo1").innerHTML= name2+" is longer than "+ name1;
    }
}
isLarger(name2, name1);


document.getElementById("demo2").innerHTML = reverseString;
document.getElementById("demo3").innerHTML = myString.substring(0,2)+" "+mySecondString.substring(0,2);
document.getElementById("demo4").innerHTML = myNumber;