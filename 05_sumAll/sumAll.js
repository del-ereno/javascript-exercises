const sumAll = function(num1,num2) {
    var sum = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1 >= 0 && num2 >= 0){
            if (num1 > num2){
                let num3 = num1;
                num1 = num2;
                num2 = num3;
            }
            for(let i = num2;i>=num1;i--){
                sum += i;
            }
            return sum;
        }
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
