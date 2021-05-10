function myPow(x, n) {
    let ans = 1;
    const flag = n > 0;
    n = Math.abs(n);
    while( n > 0) {
        if(n % 2 == 1) {
            ans *= x;
        }
        x *= x;
        n >> 1;
    }
    return flag ? ans: 1 / ans;
}