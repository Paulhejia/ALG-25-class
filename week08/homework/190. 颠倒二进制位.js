function reverseBits(n) {
    let ans = 0;
    for(let i = 0; i < 32; i++) {        
        ans |= (n & 1) << (31-i);
        n >>>= 1;
    }
    return ans;
}

// 时间复杂度：int 固定 32 位，循环次数不随输入样本发生改变。复杂度为 O(1)O(1)
// 空间复杂度：O(1)

// 方法二

// 时间复杂度：int 固定 32 位，循环次数不随输入样本发生改变。复杂度为 O(1)O
// 空间复杂度：O(1)
function solution(n) {
    let ans = 0;
    let cnt = 32;
    while(cnt-- > 0) {
        ans <<= 1;// 每次把结果往左移一位
        ans += (n & 1);
        n >>= 1;
    }
    return ans;
}