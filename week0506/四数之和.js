var fourSum = function(nums, target) {
  const result = [];
  if(nums.length < 4) {
    return result;
  }
  nums.sort((a,b) => a - b);
  const length = nums.length;
  for(let i = 0; i < length - 3; i++) {
    // 去重
    if(i > 0 && nums[i] === nums[i - 1]) {
        continue;
    }
    // 边界：判是否超过target数
    if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
        break;
    }
    // 边界：当前阶段的最大值是否少于最大值
    if(nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
        continue;
    }

    for(let j = i + 1; j < length - 2; j++ ) {
        // 去重
        if(j > i+1 && nums[j] === nums[j - 1]) {
            continue;
        }
        // 边界：判是否超过target数
        if(nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
            break;
        }
        // 边界：当前阶段的最大值是否少于最大值
        if(nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
            continue;
        }
        let left = j + 1 , right = length - 1;
        while(left < right) {
            const sum = nums[i] + nums[j] + nums[left] + nums[right];
            if(sum === target) {
                result.push([nums[i], nums[j], nums[left], nums[right]]);
                // 去重
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                } 
                right--;
            }
            else if(sum < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }
  }
  return result;
}