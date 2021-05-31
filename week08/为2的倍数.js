class Solution {
    public:
        bool isPowerOfTwo(int n) {
            if (!n) return n;
            while (n % 2 == 0) n >>= 1;
            return n == 1;
        }
    };

function solution(n) {
    if(n) return n;
    while(n % 2 == 0) n>>=1;
    return n === 1;
}    