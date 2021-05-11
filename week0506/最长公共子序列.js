// 题解 https://leetcode-cn.com/problems/longest-common-subsequence/solution/dong-tai-gui-hua-tu-wen-jie-xi-by-yijiaoqian/

var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // dp数组m+1行n+1列，初始化为0，此时基础情况dp[0][...] 和 dp[...][0]也一并初始化为0
    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
  
    // 从前往后遍历做选择，从1开始，因为dp[0][..]和dp[..][0]是已知的，可以推出后面的值
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            // 找到1个LCS的元素，则在之前的长度加1（i是从1开始的，所以取对应索引的值需要减1）
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // 至少有一个字符不在LCS中；（这里没有比较dp[i-1][j-1]，因为它在三者中三最小的，没有必要比较）
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // 最后一个元素即为结果
    return dp[m][n];
};