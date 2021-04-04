
/*  
    # 189. 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过） 
*/
// 1. 暴力法 
var rotate = function(nums, k) {
    const ans = [];
    for(var i = 0; i< nums.length; i++) {
        ans[(i + k) % nums.length] = nums[i];
    }
    return ans;
};
// 2. 环
var rotate = function(nums, k) {
    let hold = nums[0];
    let index = 0;
    for(var i = 0; i < nums.length; i++) {
        index = (index + k) % nums.length; 
        const tmp = nums[index];
        nums[index] = hold;
        hold = tmp;
    }
    return nums;
}    

// 3. 反转3次
var rotate = function(nums, k) {
    var reverse = function(arr, start, end) {
        if(end > nums.length -1 ) end = nums.length -1;
        while(start < end) {
            const tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }
    reverse(nums, 0, nums.length - 1); //先反转全部的元素
    reverse(nums, 0, k -1); //在反转前k个元素
    reverse(nums, k, nums.length -1); //接着反转剩余的
    return nums;
};
rotate(arr = [1,2,3,4,5,6,7],3);
console.log(arr);