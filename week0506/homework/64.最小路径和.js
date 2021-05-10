var minPathSum = function(grid) {
    var n = grid.length;
    var m = grid[0].length;
    var dp = Array.from(new Array(10),() => new Array(4));
    
    // 行
    for(let i = 0; i < n; i++) {
        // 列    
        for(let j = 0; j < m; j++) {
            if(i == 0 && j == 0) {
                dp[i][j] = grid[i][j];
            }
            else if(i == 0 && j != 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j];
            }
            else if(j == 0 && i != 0) {
                dp[i][j] = dp[j-1][i] + grid[i][j];
            }
            else if(i != 0 && i != 0) {
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return dp[n-1][m-1];
}    