// 非递归模版
const bfs = (root) => {
    let result = [];
    queue = [root];
    while(queuq.length > 0) {
        let level = [];
        n = queue.length;
        for(let i = 0; i < n; i++) {
            let node = queue.pop();
            level.push(node.val);
            if(node.left) queuq.unshift(node.left);
            if(node.right) queuq.unshift(node.right);
        }
        result.push(level);
    }
}