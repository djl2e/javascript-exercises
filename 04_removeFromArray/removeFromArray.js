const removeFromArray = function(arr, ...num) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (num.includes(arr[i])) arr.splice(i, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
