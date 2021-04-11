// 递归与迭代都是利用栈，迭代是显式栈
// 前序
var preorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while(root) {
            stk.push(root.right);
            res.push(root.val);
            root = root.left;
        }
        root = stk.pop();
    }
    return res;    
}    

// 中序
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};

// 后序
var postorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while(root) {
            stk.push(root.left);
            res.push(root.val);
            root = root.right;
        }
        root = stk.pop();
    }
    return res.reverse();
}