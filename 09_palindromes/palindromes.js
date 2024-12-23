const palindromes = function (word) {
    const filteredWord = word.toLowerCase()
                        .split('')
                        .filter(l => ('a' <= l && l <= 'z') || ("0" <= l && l <= "9"));
    
    return filteredWord.join('') === filteredWord.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
