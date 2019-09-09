//Write a function that has two nested functions
var a = 3;
var b = 6;

function add(a,b){
    var x = a+b;
    console.log(x);

} 
function subtract(a,b){
    var y = a-b;
    console.log(y);
}
function both(a,b){
    add(a,b);
    subtract(a,b);
} 

add(a,b);
subtract(a,b);
both(a,b);