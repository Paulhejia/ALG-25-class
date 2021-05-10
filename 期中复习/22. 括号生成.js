var generateParenthesis = function (n) {
    let res = [];
    function dfs(str, left, right) {
        // terminator
        if(str.length === 2 * n) {
            res.push(str);
            return ;
        }
        // process current logic
        if(left < n) {
            dfs(str + '(', left + 1, right);
        }
        if(right < left) {
            dfs(str + ')', left, right + 1);
        }
    }
    dfs("", 0, 0);
    return res;
}    