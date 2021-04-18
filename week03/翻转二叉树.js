// 翻转一棵二叉树。

/* dfs 深度遍历 */
var invertTree = function(root) {
    if(!root) {
        return null;
    }
    const tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

//二叉树 BFS 用队列
var invertTree = function(root) {
    if(tree == null) 
        return ;
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const node = queue.shift(); 
        let left = node.left;
        node.left = node.right;
        node.right = left;
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        } 
    }        
    return root;
}    