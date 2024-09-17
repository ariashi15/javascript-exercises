const palindromes = function(str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedStr = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    let start = 0;
    let end = cleanedStr.length - 1;

    while (start <= end) {
        if (cleanedStr[start] != cleanedStr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
