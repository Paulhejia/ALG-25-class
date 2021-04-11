// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/yi-ge-shi-pin-kan-dong-dan-diao-dui-lie-1dq85/
// 双端队列 + 栈
function maxSlidingWindow(nums, k) {
    if(nums == null || nums.length < k || k < 1) {
        return [];
    }
    var queue = [];
    const ans = new Array(nums.length - k + 1).fill(0);
    let index = 0;
    for(let i = 0; i< nums.length; i++) {
        while(queue.length > 0 && nums[i] >= nums[ queue[queue.length -1 ] ]) {
            queue.pop();
        }
        queue.push(i);
        
        if(queue[0] <= (i - k) ) {
            queue.shift()
        }

        if(i >= k-1) {
            ans[index++] = nums[queue[0]];
        }
    }
    return ans;
}