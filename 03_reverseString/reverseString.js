const reverseString = function(string) {
    var reversedString = "";
    var stringArray = (string.split("")).reverse();

    for(let i = 0; i < stringArray.length; i++){
        reversedString = reversedString.concat(stringArray[i]);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
