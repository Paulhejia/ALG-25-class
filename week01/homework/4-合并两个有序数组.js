
/*  
    # 88 合并两个有序数组（Facebook 在半年内面试常考） 
*/

// 1. 暴力直接插入排序
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n ,...nums2);
    return nums1.sort((a,b) => a-b);
}
// 时间复杂度 : O((n+m)log(n+m))。
// 空间复杂度 : O(1)。
// 2.双指针
var merge = function(nums1, m, nums2, n) {
	let index = m + n -1;
	m = m-1;	
	n = n-1;
	while(m >=0 || n >= 0) {
		if(m < 0) {
			nums1[index--] = nums2[n--];
		}                                                             
        else if(n < 0){
			break; // num2已全部插入，且nums1 本身包含没有遍历的m;
		}
        else if( nums1[m] > nums2[n] ) {
			nums1[index--] = nums1[m--];
		}
		else {
			nums1[index--] = nums2[n--];
		}
	}	
}

// 时间复杂度 : O(n + m)O(n+m)。
// 空间复杂度 : O(1)O(1)
merge([1,2,3,0,0,0], m=3, nums2 = [2,5,6], n = 3)
