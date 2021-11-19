// create function, param: string {string}, num {positive integer}
const repeatString = function(string, num) {
    // test if num > 0
    if (num < 0) {
        //  if < 0, then return 'ERROR'
        return 'ERROR';
    } else {
        // init totalString {empty string}
        let totalString = '';
        // construct string
        //  - for loop, i < num
        for (let i = 0; i < num; i++) {
            totalString += string;
        }
        // return totalString
        return totalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
