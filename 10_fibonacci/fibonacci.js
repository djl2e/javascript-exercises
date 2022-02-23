const fibonacci = function(input) {
    input = Number(input);
    if (input < 0) return "OOPS";
    let cur = 1;
    let prev = 0;
    for (let i = 1; i < input; i++) {
        let temp = cur;
        cur += prev;
        prev = temp;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
