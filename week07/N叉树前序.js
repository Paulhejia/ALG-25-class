function preorder(root) {
    const result = [];
    if(root == null) return result;
    const st = [];
    const res = [];
    st.push(root);
    while(st.length) {
        let node = st.pop();
        result.push(node.val);
        for(let i = node.children.length -1 ; i >= 0; i--) {
            if(node.children[i] !== null) {
                st.push(node.children[i]);
            }
        }
    }
    return result;
}