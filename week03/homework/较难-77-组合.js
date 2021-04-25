// https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/

/* 
    回溯递归
    之前说过，这种搜索不太能给出一个特别靠谱的时间复杂度表达式……咱们一共要选k个数，如果每个位置咱们都尝试了n个选项，那时间复杂度就是O(n^k)，但显然，咱们这里并没有这么做[破涕为笑]比如咱们不会第一次选1，第二次还选1，所以实际复杂度远远低于O(n^k)
    不过还是那句话……这种搜索（还带剪枝）一般没法给出靠谱的时间复杂度表达式……所以不用特别纠结于此哈～
    
    space: O(n+k) = O(n);
 */
var res = [];
var combine = function (n, k) {
    
    function solution(n, k, startIndex, curr) {
        if(curr.length === k) {
            res.push([...curr]);
            console.log("res:", res);
            return 
        }    
        for(let i = startIndex; i <= n; i++) {
            curr.push(i);
            console.log("path: ", curr);
            solution(n, k, i + 1, curr);
            curr.pop();
        }
    }
    solution(n, k, 1, []);
    return res;
}