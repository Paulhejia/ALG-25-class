// i号房没偷 dp[i][0] = max(dp[i-1][1], dp[i-1][0])
// i号房有偷 dp[i][1] = dp[i-1][0] + nums[i]

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
    let prev = nums[0];
    let curr = Math.max(nums[1]+0, nums[0]);
    for(let val of nums) {
        const temp = Math.max(curr, prev + val );
        prev = curr;
        curr = temp;
    }
    return curr;
}    

var rob = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], num[1]);
    for(let i = 2; i < n ;i++) {
        dp[i] = Math.max(dp[i-2] + dp[i], dp[i-1]);
    }
    return dp[n-1];
}

var rob = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    const n = nums.length;
    if(n === 1) {
        return nums[0];
    }
    let prev2 = nums[0]; // k-2
    let prev1 = Math.max(prev2, nums[1]); // k-1

    for(let i = 2; i < n; i++) {
        let tmp = prev1;
        prev1 = Math.max(prev2 + nums[n], prev1);
        prev2 = prev1;
    }
    return prev1;
}