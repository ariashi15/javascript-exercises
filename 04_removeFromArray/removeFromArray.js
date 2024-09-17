const removeFromArray = function(arr, ...args) {
    let result = [];
    arr.forEach(element => {
        if (!args.includes(element)) {
            result.push(element);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
