/* 
    https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/ 
*/
// 递归

var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

function helper(root, lower, upper) {
    // terminator
    if(root === null) {
        return true;
    }
    if(root.val <= lower || root.val >= upper  ) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}

// 中序遍历

// 思路 升序
// 中序遍历时(左根右)，判断当前节点是否大于中序遍历的前一个节点，如果大于，说明满足 BST，继续遍历；否则直接返回 false。
let pre = -Infinity
function isValidBST(root) {
    if(root === null) {
        return true;
    }
    if(!isValidBST(root.left)){
        return false;
    }
    if( root.val <= pre ) {
        return false;
    }
    pre = root.val;
    return isValidBST(root.right);
}