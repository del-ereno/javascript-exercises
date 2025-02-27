const repeatString = function(string, num) {

    var stringSum = "";
    if (num > 0){
        for(let i = 0; i < num;i++){
            stringSum = stringSum.concat(string);
        }
    }
    else if (num < 0){
        return("ERROR")
    }
    return stringSum;
};

// Do not edit below this line
module.exports = repeatString;
