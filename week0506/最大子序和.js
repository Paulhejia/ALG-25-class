/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
dp: 遍历找下一个 最大的值，
 如果大于pre 则相加，小于则往下找，并把开始位置重置为当前i位置的值 
  */
 var maxSubArray = function(nums) {
    let max = nums[0];
    pre = 0;
    for(let i = 0; i < nums.length; i++) {
        const val = nums[i];
        pre = Math.max(pre + val, val);// 大于pre 则相加，少于则往下找
        max = Math.max(pre, max);
    }
    return max;
};