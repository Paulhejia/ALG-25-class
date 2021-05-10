// 基于 198 的拓展

/* 分别取 (start, end)=(0,n-2) 
和 (start， end)=(1,n-1) 进行计算，
取两个 dp[end] 中的最大值，即可得到最终结果。

p1 =  dp{1, n - 1};
p2 = dp{0, n - 2 };

max(p1, p2);

*/
var rob = function(nums) {
    const length = nums.length;
    if(length === 1) {
        return nums[0];
    } else if(length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(robRange(nums, 0, nums.length - 1), robRange(nums, 1, nums.length));
}    

function robRange(nums, start, end) {
    let prev = nums[start];
    let curr = Math.max(nums[start], nums[start + 1] + 0);  
      
    for(let i = start + 2; i < end /*这里的边界要做好*/ ; i++) {
        const tmp = curr; // k - 1
        curr = Math.max(curr, prev + nums[i]); 
        prev = tmp;
    }
    return curr;
}