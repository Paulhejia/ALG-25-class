function jump(nums) {
    let position = nums.length - 1;
    let step = 0;
    while(step > 0) {
        for(let i = 0; i < position; i ++ ){
            if(nums[i] >= position - i) {
                position = i;
                step++;
                break;
            }
        }
    }
    return step;
}