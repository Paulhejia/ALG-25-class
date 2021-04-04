/* 高等 */
/* 
    # 42 接雨水 
*/

// 1. 栈实现
var trap = function(height) {
    let ans = 0;
    // 递减栈
    const st = []; 
    for(let i = 0; i< height.length ;i++) {		
        while(st.length && height[st[st.length-1]] < height[i]) {			
            const cur = st.pop(); //
			debugger 
			if(st.length == 0) {
				break;
			}
            const l = st.pop();
            let h = Math.min(height[i], height[l]) - height[cur];
            ans += ( i-l-1 ) * h;
            
        }
		st.push(i);
	}
    return ans
};
// time: O(N)
// space: O(N);

// 双指针
var trap = function(height) {
    let ans = 0;
	let left = 0;
	let right = height.length -1;
	let max_left = 0;
	let max_right = 0;
	while(left < right) {
		if(height[left] < height[right]) {
			height[left] >= max_left ? max_left=height[left] : ans += (max_left - height[left]);
			left++;
		}
		else {
			height[right] >= max_right ? max_right=height[right] : ans += (max_right - height[right]);
			right--;
		}
	}
    return ans
};
