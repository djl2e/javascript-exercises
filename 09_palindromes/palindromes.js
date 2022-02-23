const palindromes = function (str) {
    let i = 0;
    let j = str.length - 1;

    while (i != j) {
        a = str.charAt(i);
        b = str.charAt(j);
        if (a.toUpperCase() == a.toLowerCase()) {
            i++;
            continue;
        }
        if (b.toUpperCase() == b.toLowerCase()) {
            j--;
            continue;
        }
        if (a.toLowerCase() != b.toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
