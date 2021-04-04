/*  
*    简单题
    # 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过） 
*/
var removeDuplicates = function(nums) {
    // 双指针
    let i = 0;
    let j = 0; // 循环指针
    let tmp = null;
    while(j < nums.length) {
        if(nums[j] != nums[i]) {
            nums[i+1] = nums[j]
            j++;
            i++;
        }
        else {
            j++;
        }
    }
    return i + 1;
};
removeDuplicates([1,1,2]);
 
// time: O(N) 
// space: O(1) 
