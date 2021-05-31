// 暴力求解
// 不停找最大值

const { lime } = require("color-name");

// 动态规划
/* #状态定义
dp[i] 表示前 i 天的最大利润

#dp 方程
dp[i] = max(dp[i-1], price[i] - minprice);

#初始条件
dp[0] = prices[0] */


var maxProfit = function(prices) {
    const n = prices.length;
    if(n === 0) {
        return 0;
    }
    let minprice = prices[0]; 
    const dp = new Array(n).fill(0);
    for(let i = 1; i < n;i++) {
        minprice = Math.min(minprice, prices[i]);
        dp[i] = Math.max(dp[i - 1], prices[i] - minprice);
    }
    return dp[n - 1];
}

var maxProfit = function(prices) {
    const n = prices.length;
    if(n === 0) {
        return 0;
    }
    let minPrice = prices[0];
    const dp = new Array(n).fill(0);
    for (let index = 1; index < n; index++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(prices[i] - minPrice, dp[i-1]);
    }
    return dp[i-1];
}