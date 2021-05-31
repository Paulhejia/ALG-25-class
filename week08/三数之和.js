var threeSum = function(nums) {
    if(nums.length < 3) {
        return []
    }
    const ans = [];
    nums.sort((a, b) => a-b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;
        let L = i + 1;
        let R = nums.length - 1;
        if(nums[i] === nums[i-1]) continue;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[right];
            if(sum === 0) {
                ans.push(nums[i],nums[L],nums[right]);
                while(L < R && nums[L] === nums[L + 1]) L++;
                while(L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            }   
            else if(sum < 0) {
                L++;
            }
            else if(sum > 0) {
                R--;
            }
            
        }
    }
    return ans;
}    

var threeSum = function(nums) {
    if(nums.length < 3) {
        return []
    }
    const ans = [];
    sums.sort((a,b) => a-b);
    for(let i = 0; i < sums.length - 2; i++) {
        if(sums[i] > 0) {
            break;
        }
        if(sums[i] === sum[i-1]) continue; 
        let L = i + 1;
        let R = sums.length - 1;         
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0) {
                ans.push(nums[i], nums[L], nums[R]);
                while(L < R && nums[L] === nums[L + 1]) L++;
                while(L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            }
            else if(sum < 0) L++
            else if(num > 0) R--;
        }
    }
    return ans;
}