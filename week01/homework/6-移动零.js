

/* 
    283 # 移动零 
*/

// 双指针 
var Solution = function (nums) {
	let zeroIndex = 0; 
	let loopIndex = 0;
	while( loopIndex < num.length ) {
		if (nums[loopIndex] != 0) {
			if ( loopIndex != zeroIndex ) {				
				const tmp = nums[zeroIndex];
				nums[zeroIndex] = nums[loopIndex];
				nums[loopIndex] = tmp;
			}
			zeroIndex++;
			
		}
		loopIndex++;
	}
}
// time: O(N);
// space: O(1);
