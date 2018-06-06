// A function thats takes in a string that returns all unique char in the string and report letter count
function countLetters(string){
    var result = {};
    var noCaps = string.toLowerCase().split(" ").join("");
    console.log(noCaps);
    for (var i = 0; i < noCaps.length; i++){
        var resultkeys = Object.keys(result);
        if (resultkeys.indexOf(noCaps[i]) === -1){
            result[noCaps[i]] = 1;
        }
        else {
            result[noCaps[i]]++
        }    
    }
    return result;
}
console.log(countLetters("lighthouse in the house"));