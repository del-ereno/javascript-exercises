const palindromes = function (palString) {
    palString = palString.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    palArray = palString.split("");
    let midIdx = Math.round(palArray.length / 2);
    var a = palArray.slice(0, midIdx-1);

    //for even length string splitting
    if (palArray.length % 2 == 0){
        midIdx += 1;
    }

    var b = palArray.slice(midIdx).reverse();
    let res = a.join() == b.join();

    return res;

};

// Do not edit below this line
module.exports = palindromes;
