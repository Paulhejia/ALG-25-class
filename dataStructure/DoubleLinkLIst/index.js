/* 
    append(element) 向链表尾部追加一个新元素。
    insert(position, element) 向链表的指定位置插入一个新元素。
    getElement(position) 获取指定位置的元素。
    indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回 -1。
    update(position, element) 修改指定位置上的元素。
    removeAt(position) 从链表中的删除指定位置的元素。
    remove(element) 从链表删除指定的元素。
    isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
    size() 返回链表包含的元素个数，与数组的 length 属性类似。
    toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
    forwardString() 返回正向遍历节点字符串形式。
    backwordString() 返回反向遍历的节点的字符串形式。 
*/

const { thistle } = require("color-name");

class LinkNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        const newNode = new LinkNode(element);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    insert(position, element) {
        // 1、position 越界判断
        if (position < 0 || position > this.length) return false;
        const newNode = new LinkNode(element);
        if(position === 0) {
            if(this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        }
        else if(position === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else {
            let currentNode = this.head;
            let previousNode = null;
            while(position-- > 0) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // 交换
            previousNode.next = newNode;
            newNode.prev = previousNode;
            newNode.next = currentNode;
            currentNode.prev = newNode;
        }
        this.length;
        return true;
    }
    removeAt(position) {
        // 1、position 越界判断
        if (position < 0 || position > this.length - 1) return null;
        let currentNode = this.head;
        if(position === 0) {
            if(this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        else if (position === this.length - 1) {
            currentNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;    
        }
        else {
            let previousNode = null;
            while(position-- > 0) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            currentNode.next.prev = previousNode;
        }
        
        this.length--;
        return currentNode.data;
    }
    update(position, data) {
        let currentNode = this.head;
        while(position-- > 0) {
            currentNode = currentNode.next;
        }
        currentNode.data = data;
        return currentNode;
    }
    // forwardToString() 链表数据从前往后以字符串形式返回
    forwardToString() {
        let currentNode = this.head;
        let result = '';
        // 遍历所有的节点，拼接为字符串，直到节点为 null
        while(currentNode) {
            result = currentNode.data + '--';
            currentNode = currentNode.next;
        }
        return result;
    }
    // backwardString() 链表数据从后往前以字符串形式返回
    backwardString() {
        let currentNode = this.tail;
        let result = '';
        while(currentNode) {
            result = currentNode.data + '--';
            currentNode = currentNode.prev;
        }
        return result;
    }
    getElement(position) {}
    indexOf(data) {
        let currentNode = this.head;
        let index = 0;
        while(currentNode) {
            if( currentNode.data === data ) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
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
    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

module.exports = DoubleLinkedList;