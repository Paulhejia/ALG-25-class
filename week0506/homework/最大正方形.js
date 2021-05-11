/* 
思路
定义状态
dp[i][j]代表啥？ 代表正方形的右下角

dp 方程 
边界
i = 0 || j = 0 
    dp[i][j] = '1'

i > 1, j > 1
    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1 ;

空间优化
    用 3个变量代替 dp 数组
 */
var maximalSquare = function (matrix) {
    let maxSide = 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from(new Array(m), () => new Array(n));
    for(let i = 0; i < m;i++) {
        for(let j= 0; j < n;j++ ) {
            if(matrix[i][j] == '1') {
                if(i === 0 || j === 0) {
                    dp[i][j] = 1;
                }
                else {
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;                    
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    return maxSide * maxSide; 
}