//Write a function that has four parameters.

//1-an empty array
//2-a word
//3-a number
//4-an object
//With an empty array at your disposal using the three variables, 
//insert them into the empty array and return the array.

function someMethod(emptyArray, someWord, someYear, myCat){
    var emptyArray = [];
    var someWord = "Bumblebee";
    var someYear = 1985;
    var myCat = {name: "Hurley", ageInYears: 2, breed: "Ragdoll", weightLbs: 20};
    emptyArray.push(someWord, someYear, myCat);
    console.log(emptyArray);
}

someMethod();
