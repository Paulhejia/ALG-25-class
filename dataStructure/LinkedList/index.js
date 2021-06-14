/* 
    append(element) 向链表尾部添加一个新的项。
    insert(position, element) 向链表的特定位置插入一个新的项。
    get(position) 获取对应位置的元素。
    indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
    update(position, element) 修改某个位置的元素。
    removeAt(position) 从链表的特定位置移除一项。
    remove(element) 从链表中移除一项。
    isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
    size() 返回链表包含的元素个数，与数组的 length 属性类似。
    toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。 
*/


class ListNode {
    data;
    next;
    constructor(data, next) {
        this.data = data === undefined ? 0 : data;
        this.next = next === undefined ? null : next;
    }
    
}

class LinkedList {
    // 初始链表长度为 0
    length = 0;
    head = null;
    // 往链表尾部追加数据
    append(data) {
        const newNode = new ListNode(data);
        if(this.length === 0) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            // 找到末尾
            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }
    // 在指定位置（position）插入节点
    insert(position, data) {
        if(position < 0 || position > this.length) return false;
        //
        const newNode = new ListNode(data);

        if(position === 0) {
            // 让新节点的 next 指向 原来的第一个节点，即 head
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            let previousNode = null;
            let index = 0;
            while(index++ < position) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
            previousNode.next = newNode;
            newNode.next = currentNode;
        }
        this.length++;
        return newNode;
    }

    getData(position) {
        // 1、position 越界判断
        if (position < 0 || position >= this.length) return null;

        let currentNode = this.head;
        while(position-- > 0) {            
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    indexOf(data) {
        let currentNode = this.head;
        let index = 0;
        while(currentNode) {
            if(currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    update(position, data) {
        // 1、position 越界判断
        if (position < 0 || position >= this.length) return false;
        // 2、痛过循环遍历，找到指定 position 的节点
        let currentNode = this.head;
        while(position-- > 0) {
            currentNode = currentNode.next;
        }
        // 3、修改节点 data
        currentNode.data = data;
        return currentNode;
    }

    removeAt(position) {
        // 1、position 越界判断
        if (position < 0 || position >= this.length) return false;

        let currentNode = this.head;
        let previousNode = null;
        if(position === 0) {
            this.head = currentNode.next;
        }
        else {
            while(position-- > 0) {
                previousNode = currentNode;
                currentNode = currentNode.next;                                
            }    
            // 巧妙之处，让上一节点的 next 指向到当前的节点的 next，相当于删除了当前节点。
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode;
    }

    remove(data) {
        this.removeAt(this.indexOf(data))
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
    
    toString() {
        let currentNode = this.head;
        let ans = "";
        while(currentNode) {
            ans += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        return ans;
    }
}

module.exports = LinkedList;