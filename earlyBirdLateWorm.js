
//Write a function that creates 5 variables if it's before 12 o'clock
//or 10 if it's after 12:00. Return the variables

function letsMakeVars() {
    var anotherVar= [];
    if(oClock<=1200 && oClock>=0){
        for(i=0, i<=5, i++){
         var anotherVar[i]= "cool variable";
        }
    }
    else if(oClock>1200 && oClock<=2400){
        for(i=0, i<=10, i++){
            var anotherVar[i]= "cool variable";
        }
    }
}