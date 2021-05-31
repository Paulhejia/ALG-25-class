// https://leetcode-cn.com/problems/valid-perfect-square/

// 二分法
function isPerfectSquare(num) {
    if(num < 2) {
        return true;
    }
    let left = 0, right = Math.floor(num/2), x, guessSquared;
    while(left <= right) {
        x = Math.floor((left + right) / 2);
        guessSquared = x * x;
        if(guessSquared == num) {
            return true;
        }
        else if(guessSquared > num) {
            right = x - 1;
        }
        else {
            left = x + 1;
        }
    }
    return false;
}
/* 
时间复杂度：O(logN)
空间复杂度：O(1)
 */
// 牛顿迭代法
// x = (x + num/x) / 2
function isPerfectSquare(num) {
    if(num < 2) return true;
    let x = num /2 ;
    while(x * x > num) {
        x = (x + num / x) / 2;
    }
    return (x * x === num);
}

/* 时间复杂度：O(logN)
空间复杂度：O(1) */