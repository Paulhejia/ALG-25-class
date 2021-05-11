// https://leetcode-cn.com/problems/task-scheduler/

var leastInterval = function(tasks, n) {
    let len = task.length;
    const vec = new Array(26).fill(0);
    const AIndex = 'A'.charCodeAt(0);
    for(let i = 0; i < tasks.length; i++) {
        vec[tasks.charCodeAt(i) - AIndex ]++;
    }    
}