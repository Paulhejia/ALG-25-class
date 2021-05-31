//https://leetcode-cn.com/problems/number-of-1-bits/solution/wei-1de-ge-shu-by-leetcode-solution-jnwf/

// time: O(logn)
// space O(1)
// 观察这个运算：n&(n - 1)，其运算结果恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果
var hammingWeight = function(n) {
    let ret = 0;
    while(n) {
        n &= (n - 1);// 把最低位的1 变成0，直到全部为0
        ret++;
    } 
    return ret;
};


// 循环检查二进制位
// time O(k) k = 32
// space O(1)
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        console.log(n & (1 << i));
        // 计算二进制的第i 位是否是 1
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};
