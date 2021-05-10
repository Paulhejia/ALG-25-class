// i号房没偷 dp[i][0] = dp[i-1][1]
// i号房有偷 dp[i][1] = dp[i-2][1] + nums[i]

/* 
    dp[i] = max(dp[i][0], dp[i][1]);
    降纬
    dp[i] = max(dp[i-1], dp[i-2] + curr); 
*/

var rob = function(nums) {
    const n = nums.length;
    dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1] + 0);
    for(let k = 2; k <= n; k++) {
        dp[k] = max(dp[k-1], nums[k-1] + dp[k-2]);
    }
    return dp(n - 1)
}    

// 优化空间
var rob = function(nums) {    
    let curr = nums[0];
    let prev = Math.max(nums[1]+0, nums[0]);
    for(let val of nums) {
        const temp = Math.max(curr, prev + val );
        prev = curr;
        curr = temp;
    }
    return curr;
}    