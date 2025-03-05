const findTheOldest = function(arr) {
    
    function findAge(person){
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = 2025;
        }
        return (person.yearOfDeath - person.yearOfBirth); 
    }
    const ageMap = arr.map(findAge);
    const oldestIdx = ageMap.indexOf(Math.max(...ageMap));
    return arr[oldestIdx];
    

};

// Do not edit below this line
module.exports = findTheOldest;
