// 经典递归解法，观察发现
// 1、某一次递归终止时需要将当前字符存入数组
// 2、 字符任取一个位置左侧必 左括号>=右括号
// 3、每次递归除了需要传当前字符还需要记情当前左右括号数


var generateParenthesis = function (n) {
    let res = [];
    function dfs(str, left , right) {
        // terminator    
        if(str.length === 2 * n) {
            res.push(str);
            return;
        }
        // process current logic        
        // drill down
        if(left < n) {
            dfs(str + '(', left + 1, right);
        }
        if(right < left) {
            dfs(str + ')', left, right + 1);
        }
        // restore current status
    }
    dfs("", 0, 0);
    return res;
}    