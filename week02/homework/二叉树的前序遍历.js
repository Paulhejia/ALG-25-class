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