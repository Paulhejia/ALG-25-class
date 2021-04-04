

 /* 
    # 两数之和 
 */

    var twoSum = function(nums, target) {
        const myMap = new Map();
        for(let i = 0; i < nums.length;i++) {
            const t1 = target - nums[i];
            if(myMap.has(t1) ) {
                return [myMap.get(t1), i];
            }
            myMap.set(nums[i], i);
        }
        return [];
    };
    twoSum([2,7,11,15])
    // time: O(N)
    // space: O(N)
    