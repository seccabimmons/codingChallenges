var paragraph = "Curabitur et dizzle you son of a bizzle nisi fo shizzle mollis. Da bomb sheezy. Yippiyo odio. Hizzle neque. Shiznit orci. Crizzle maurizzle fizzle, interdizzle a, feugiat sit amet, sheezy in, mah nizzle. Shizzlin dizzle brizzle. Vestibulizzle fizzle mi, volutpat izzle, away sizzle, adipiscing da bomb, velit. Cras in nizzle. Da bomb volutpizzle yippiyo shiznit orci. Crizzle shut the shizzle up justo izzle purizzle sodales fo. Crazy venenatizzle justo ma nizzle lacus. Nunc doggy. Suspendisse bow wow wow placerat izzle. Curabitizzle its fo rizzle ante. Nunc pharetra, leo eu dapibus hendrerizzle, ipsum felis gangster sizzle, stuff check it out magna fo shizzle we gonna chung pede. Pot a nisl. Shizzle my nizzle crocodizzle aptent mammasay mammasa mamma oo sa sociosqu izzle litora break it down yo mamma nizzle shizznit, per phat hymenizzle. Aliquam interdizzle, cool nec fo things, orci viverra leo, sempizzle risus arcu crazy sem.";

var eachWord= paragraph.split(" ");
var searchBox = "shizzle";
var secondSearch = "fo";
var result=[];

function searchPara(eachWord, searchBox, secondSearch) {
    for(var i=0; i<eachWord.length; i++){
        if(eachWord[i] === searchBox) {
            console.log("hey I found it... I added it to the results array.");
            result.push(eachWord[i]);
            console.log(result);
        }
        else if(eachWord[i]===secondSearch){
            console.log("hey I found it... I added it to the results array.");
            result.push(eachWord[i]);
            console.log(result);
        }
    }
}

searchPara(eachWord, searchBox, secondSearch);
