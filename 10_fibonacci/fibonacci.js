const fibonacci = function(n) {

    if (n < 0) return "OOPS";
    
    if (typeof countArg !== 'number')
        n = parseInt(n);

    let n2 = 1;
    let n1 = 0;
    let result = 0;
    let i = 0;

    while (i < n) {
        result = n2 + n1;
        n2 = n1;
        n1 = result;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
