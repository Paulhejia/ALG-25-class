// 辅助堆栈 
/* time : O(N)
space: O(N) */
var removeOuterParentheses = function(S) {
    let res = '';
    let stack = [];
    for(let i = 0; i < S.length; i++) {
        const cur = S[i];
        if( cur == '(' ) {
            if(stack.length) {
                res += cur;
            }
            stack.push(cur);
        }
        else {
            stack.pop();
            if(stack.length) {
                res += cur;
            }
        }
    }
    return res;
};

// 单指针计数 
/* 
time: O(N)
space: O(1)
规则： 遇到左括号，我们的计数器 +1，遇到右括号，我们的计数器 -1
遇到左括号，当前计数值大于 00 ，则属于有效的左括号。
遇到右括号，当前计数值大于 1 ，则属于有效的右括号。    
*/

var removeOuterParentheses = function(S) {
    let count = 0;
    let res = '';
    for(var i =0; i < S.length; i++) {
        const cur = S[i];
        if( cur === '(') 
            count++ > 0 ? res += cur: '';
        if( cur === ')' )
            --count > 0 ? res += cur: '';
    }
    return res;
};

