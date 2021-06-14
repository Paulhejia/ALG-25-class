var validPalindrome = function(s) {
    for(let i = 0, j = s.length - 1; i < j; i++, j--) {
        if(s.charAt(i) != s.charAt(j)) {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }
    }
    return true;
}

function isPalindrome(s, l, r) {
    while(l < r) {
        if(s.charAt(l++) !== s.charAt(r--)) {
            return false;
        }
    }
    return true;
}