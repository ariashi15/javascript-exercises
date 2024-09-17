const fibonacci = function(n) {
    if (n == 0) { return 0; }
    if (n == 1 || n == 2) { return 1; }
    if (n < 0) { return "OOPS"}

    n = parseFloat(n);
    
    let prev = 1;
    let prevprev = 1;

    for (let i = 3; i <= n; i++) {
        temp = prev;
        prev = prev + prevprev;
        prevprev = temp;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
