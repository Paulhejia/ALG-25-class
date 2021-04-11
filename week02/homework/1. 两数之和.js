// 暴力解
// 哈希表
/* time: O(N)
space: O(N) */

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


