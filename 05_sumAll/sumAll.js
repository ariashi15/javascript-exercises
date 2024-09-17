const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }
    
    smaller = Math.min(start, end)
    larger = Math.max(start, end)
    res = 0;
    for (let i = smaller; i <= larger; i++) {
        res += i;
    }

    return res;
};

// Do not edit below this line
module.exports = sumAll;
