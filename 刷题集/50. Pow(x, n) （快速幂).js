// 位运算
/* 
题解
https://leetcode-cn.com/problems/powx-n/solution/50-powx-n-kuai-su-mi-qing-xi-tu-jie-by-jyd/
算法流程：
当 x = 0.0 时：直接返回 0.0 ，以避免后续 11 除以 0 操作报错。分析： 数字 00 的正数次幂恒为 0 ； 0 的 0 次幂和负数次幂没有意义，因此直接返回 0.00.0 即可。
初始化 res = 1 。
当 n < 0 时：把问题转化至 n ≥ 0 的范围内，即执行 x = 1/x ，n = - n 。
循环计算：当 n = 0 时跳出。
当 n & 1 = 1 时：将当前 x 乘入 res （即 res *= x ）。
执行 x = x^2 （即 x*=x ）
执行 n 右移一位（即 n >>= 1）。
返回 res 
 */
// time log(n)
// space O(1);
var myPow = function(x, n) {
    if(x == 0)  {
        return 0;
    }
    if(n === 0) {
        return 1;
    }
    const b = n;
    let res = 1;
    if(b < 0) {
        x = 1 / x;
        n = -n
    }
    while(n) { // 分治
        if(n & 1) res *= x;
        n *= x;
        n >>= 1;
    }
    return res;
}