// 双指针
var moveZeroes = function(nums) {
    let zero = 0;
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            const tmp = nums[i];
            nums[i] = 0;
            nums[zero] = tmp;            
            zero++;
        }
        
    }
} 