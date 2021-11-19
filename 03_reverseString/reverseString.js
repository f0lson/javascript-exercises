// function @param: str {string}
const reverseString = function(str) {
    // init var stringReverse {string}
    let stringReverse = '';
    // reverse loop through str
    // - find length, subtract 1 (index starts at 0)
    // - start with last letter
    // - decrement until i >= 0
    for (let i = str.length - 1; i >= 0; i--) {
        // build string, store in stringReverse
        stringReverse += str[i];
    }
    // return stringReverse
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
