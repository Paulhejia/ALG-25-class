// java 版 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/qian-xu-bian-li-python-dai-ma-java-dai-ma-by-liwei/
// javascript 版https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/


// 分治法

const buildTree = (preorder, inorder) => {
    const helper = (p_start, p_end, i_start, i_end) => {
      if (p_start > p_end) return null;
      let rootVal = preorder[p_start];    // 根节点的值
      let root = new TreeNode(rootVal);   // 根节点
      let mid = inorder.indexOf(rootVal); // 根节点在inorder的位置
      let leftNum = mid - i_start;        // 左子树的节点数
      root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
      root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
      return root;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
  };
  