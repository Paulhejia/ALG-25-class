/* 
状态定义
dp[n] 零钱金额为n时，所需的最少的硬币个数

dp 方程
dp[n] = min(dp[n-5], dp[n-2], dp[n-1]) + 1;
 */

var coinChange = function(coins, amount) {
    if(coins.length) {
        return -1;
    }
    dp[0] = 0;
    const dp = new Array(amount + 1).fill(amount + 1 /* 用于做无法匹配时的判断 */);
    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length ;j++) {
            if(i - coins[j] >= 0 ) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1 );
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}