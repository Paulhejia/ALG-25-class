// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// js
// 递归
/* 
找出终止条件：当前节点为空
找出返回值：节点为空时说明高度为 0，所以返回 0；节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值
某层的执行过程：在返回值部分基本已经描述清楚
时间复杂度：O(n) */

var maxDepth = function(root) {
    let depth = 0;
    // 终结条件
    if(!root) {
        return 0;
    } else {

    // logic
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};


// BFS
/* 时间复杂度：O(n)，其中 n 为二叉树的节点个数。与方法一同样的分析，每个节点只会被访问一次。

空间复杂度：此方法空间的消耗取决于队列存储的元素数量，其在最坏情况下会达到 O(n)。 */

function solution(root) {
    if(!root) {
        return 0;
    }
    const queue = [];
    queue.push(root);
    let depth = 0;
    while(queue.length) {
        const n = queue.length;
        for(let i = 0; i < n; i++) {
            // 弹出第一个
            const node = queue.shift();
            if(node.left != null) {
                queue.push(node.left);
            }
            if(node.right != null) {
                queue.push(node.right);
            }
        }
        depth++;
    }
}