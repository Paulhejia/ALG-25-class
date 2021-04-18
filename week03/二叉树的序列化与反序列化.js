/* 
    优秀题解： https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/solution/shou-hui-tu-jie-gei-chu-dfshe-bfsliang-chong-jie-f/
 */

// DFS    
// 序列化
const serialize = (root) => {
    if(root == null) {
        return 'X';
    }
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
}    

const deserialize = (data) => {
    let list = data.split(',');
    const buildTree = (list) => {
        const rootVal = list.shift();
        if(rootVal == 'X') {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    }
    return buildTree(list);
}