// 双指针
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b); // log m
    nums2.sort((a, b) => a - b); // log n
    let i = 0, j = 0;
    const ans = [];
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] == nums2[j]) {
            ans.push(nums1[i]);
            i++;
            j++;            
        }
        else {
            nums1[i] > nums2[j] ? j++ : i++;
        }
    }
    return ans;
};

// 哈希表
var intersect = function(nums1, nums2) { // m n
    const ans = [];
    for(var i = 0; i < nums1.length; i++) { // O(m)
        const idx = nums2.indexOf(nums1[i]); // O(1)
        if(idx > -1) {
            ans.push(nums1[i]); 
            nums2.splice(idx, 1); // 相当于数组删除操作
        }
    }
}    
/* 
    这里
    假如 n > m;
    time: 最快  O(m + n ); 最慢 O(n ^ 2);
    space: O(m); 
*/

const intersect = (nums1, nums2) => {
    const map = {};
    const res = [];
    for (const num1 of nums1) { // 记录nums1各个数字的出现次数
      if (map[num1]) {
        map[num1]++;  
      } else {         
        map[num1] = 1; 
      }
    }
    for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
      const val = map[num2];
      if (val > 0) {            // 有出现过
        res.push(num2);         // 推入res数组
        map[num2]--;            // 匹配掉一个，就减一个
      }
    }
    return res;
  };