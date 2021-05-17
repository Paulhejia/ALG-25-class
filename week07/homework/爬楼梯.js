function climbStairs(n, f1 = 1, f2 = 2) {
    if(n == 1) {
        return f1;
    }
    return climbStairs(n-1, f2, f1 + f2) // (dp[n-1], dp[n-2])
}