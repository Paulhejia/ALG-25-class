// DFS

function helper(grid, i, j, rows, cols) {
    if(i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') return

    grid[i][j] = '0';
    helper(grid, i + 1, j, rows, cols); // 右
    helper(grid, i, j + 1, rows, cols); // 下
    helper(grid, i - 1, j, rows, cols); // 左
    helper(grid, i, j - 1, rows, cols); // 上
}   

var numIslands = function(grid) {
    let res = 0;
    const rows = grid.length;
    if(rows === 0) return 0;
    const cols = grid[0].length;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) { 
            if(grid[i][j] === '1') {
                helper(grid, i, j, rows, cols);
                res++;
            }
        }
    } 
    return res;
}

// 时间复杂度：O(m * n)O(m∗n)
// 空间复杂度：O(m * n)O(m∗n)

function helper(grid, i, j, rows, cols) {
    if(i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') {
        return ;
    }

    grid[i][j] = '0';
    // 上
    helper(grid, i + 1, j, rows, cols) ;    
    // 下
    helper(grid, i - 1, j, rows, cols) ;    
    // 左
    helper(grid, i, j - 1, rows, cols) ;
    // 右
    helper(grid, i, j + 1, rows, cols) ;
    
}

function numIslands(grid) {
    let res = 0;
    const rows = grid.length; // 列
    if(rows === 0) return 0;
    const cols = grid[0].length; // 行    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; i < cols; j++) {
            if(grid[i][j] === "0")  return;
            helper(grid, i, j, rows, cols);
            res++;
        }
    }
    return res;
}