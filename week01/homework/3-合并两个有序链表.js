
/* 
 # 合并两个有序链表（亚马逊、字节跳动在半年内面试常考） 
*/
// 可以简单理解为： 同时遍历两个链表， 当前遍历的结点，谁的结点小，就把谁的结点“摘下来”，“安装”在新链表上就可以了吧。
var mergeTwoLists = function(l1, l2) {
    
    if(!l1) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    if(l1.val < l2.val) {
        // 如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// time: O(m + n); 因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次
// space:  算上递归栈，O(m+n）;不算则为 O(1); 
