const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numList) {
	return numList.reduce((total, currentItem) => {return total + currentItem;},0);
};

const multiply = function(numList) {
  return numList.reduce((total, currentItem) => {return total * currentItem;},1);
};

const power = function(num1,num2) {
	return (Math.pow(num1,num2));
};

const factorial = function(num) {
	if (num === 0){
    return 1;
  }
  else{
    let numList = []
    while (num != 0){
      numList.push(num);
      num -=1;
    }
    return numList.reduce((total, currentItem) => {return total * currentItem;},1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
