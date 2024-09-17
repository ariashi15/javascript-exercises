const reverseString = function(s) {
    result = "";
    for (const char of s) {
        result = char + result;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
