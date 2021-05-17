function BFS(root) {    
    const queue = [root];   
    const res = [];
    while(queue.length) {
        const n = queue.length;
        const level = [];
        for(let i = 0; i < n ; i++ ) {
            let node = queue.shift();
            level.push(node.value);
            // generate_relative_nodes
            queue.push(node.left);
            queue.push(node.right);
        }
        res.push(level);
    }
}

function BFS(root) {
    const queue = [root];
    const res = [];
    while(queue.length) {
        const n = queue.shift();
        const level = [];
        for(i = 0; i < n; i++) {
            const node = queue.pop();
            level.push(node.val);
            queue.unshift(generate_relative_node(node));
        } 
        res.push(level);
    }
}