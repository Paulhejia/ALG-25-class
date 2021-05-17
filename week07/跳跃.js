function solution(nums) {
    const n = nums.length;
    let res = 0;
    for(let i = 0; i < n ; ++i) {
        if(i <= res) {
            res = Math.max(res, i + nums[i]);
            if(res >= n - 1) {
                return true;
            }
        }                
    }
    return false;
}