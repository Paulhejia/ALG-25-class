// 题解 https://leetcode-cn.com/problems/search-a-2d-matrix/solution/fu-xue-ming-zhu-liu-chong-fang-fa-bang-n-e20z/


var searchMatrix = function(matrix, target) {
    const m = matrix.length ;
    const n = matrix[0].length;
    for(let i = 0;i < matrix.length;i++ ) {
        if(target <= matrix[i][n-1]) { // 这一行不符合找下一行
            for(let j = 0; j < matrix[i].length;j++) {
                if(matrix[i][j] == target) { 
                    return true;
                }
            }
        }
        else {
            continue;
        }
    }
    return false;
};