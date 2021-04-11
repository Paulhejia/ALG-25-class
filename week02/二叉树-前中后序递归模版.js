// 隐式 调用栈

// 前序
var preorderTraversal = function(root) {
    const res = [];
    const preorder = (root) => {
        if (!root) {
            return;
        }
        res.push(root.val); 
        preorder(root.left); // [root, left[root, left[] , right[]] , right[root, left[] , right[]] ]       
        preorder(root.right);
    }
    preorder(root);
    return res;
};

// 中序
var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// 后序
var postorderTraversal = function(root) {
    const res = [];
    const postorder = (root) => {
        if (!root) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);        
    }
    postorder(root);
    return res;
};