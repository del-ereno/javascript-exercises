const fibonacci = function(num) {
    num = Number(num);
    if (num == 0){
        return 0;
    }
    else if (num < 0){
        return "OOPS";
    }
    let prevFib = 0;
    let fibNum = 1;
    for(let i = 1; i < num; i++){
        let tempFib = fibNum + prevFib;
        prevFib = fibNum;
        fibNum = tempFib; 
    }
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
