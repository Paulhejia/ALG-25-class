// 非递归
function DFS(root) {
    const visited = new Map();
    if(!root) return;
    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        if(visited.get(node.val)) continue;
        visited.set(node.val, 1);

        for(let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i]);
        }
    }
}