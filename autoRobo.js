//Write a method that can take one variable such as speed
//and give out tickets or discounts to drivers.

function autoRobo(someSpeed) {
    if(someSpeed>70){
        console.log("Go to Jail. Do not pass go.");
    }
    else if(someSpeed<=70 && someSpeed >=45){
        console.log("Grape Job. Have a discount");
    }
    else {
        console.log("Today, grandpa.");
    }
}

autoRobo(35);
autoRobo(80);
autoRobo(55);