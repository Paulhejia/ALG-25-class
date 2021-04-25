// 优秀题解 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/best-time-to-buy-and-sell-stock-ii-zhuan-hua-fa-ji/

function maxProfit(prices) {
    let res = 0;
    for(let i = 0; i < prices.length ; i++) {
        let tmp = prices[i] - prices[i-1]; // 利润为正
        if( tmp > 0 ) {
            res += tmp
        }
    }
    return res;
}