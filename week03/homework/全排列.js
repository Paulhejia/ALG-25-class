// 回溯
function solution(nums) {
    let res = [];
    const visited = [];
    backtrack(res, nums, [], visited);
    function backtrack(res, nums, path, visited) {
        if(path.length == nums.length) {
            res.push(path);
            return ;
        }
        for(let i = 0; i < nums.length ; i++) {
            if(visited[i] == 1) continue; 
            visited[i] = 1;
            path.push(nums[i]); 
            backtrack(res, nums, path, visited);
            // restore current status
            visited[i] = 0;
            path.pop();
        }
    }
}