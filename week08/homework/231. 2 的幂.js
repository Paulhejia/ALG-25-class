var isPowerOfTwo = function(n) {
    if(!n) return n;
    return n > 0 && n & (n - 1) == 0;
};

var isPowerOfTwo = function(n) {
    if(!n) return n;
    return n > 0 && n & (-n) == n;
};