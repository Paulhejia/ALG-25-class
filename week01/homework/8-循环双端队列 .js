

/** 中等 */
/*
 641 
 设计一个循环双端队列 
*/

class MyCircularDeque {
    constructor(k){
        this.capacity = k+1;
        this.arr = new Array(this.capacity);
        this.front = 0; // 头部指向第 1 个存放元素的位置 //插入时，先减，再赋值 //删除时，索引 +1（注意取模）
        this.rear= 0;   // 尾部指向下一个插入元素的位置 // 插入时，先赋值，再加 // 删除时，索引 -1（注意取模）
    }
    insertFront(value){
        if(isFull()){ return false }
        this.front = (this.front-1+this.capacity)%this.capacity
        this.arr[this.front] = value;
        return true;
    }
    insertLast(value){
        if(isFull()){ return false }
        this.arr[this.rear] = value;
        this.rear = (this.rear+1) % this.capacity;
        return true;
    }
    deleteFront(){
        if(isEmpty()){ return false }
        this.front = (this.front+1) % this.capacity;
        return true;
    }
    deleteLast(){
        if(isEmpty()) { return false};
        this.rear = (this.rear-1+this.capacity) % this.capacity;
        return true;
    }
    getFront(){
        if(isEmpty()){ return -1};
        return this.arr[this.front];
    }
    getRear(){
        if(isEmpty()){ return -1};
        // 当 rear 为 0 时防止数组越界, rear指向的是下一个插入的元素的位置，元素为空，需要-1；
        return this.arr[(this.rear-1+this.capacity) % this.capacity];
    }
    isEmpty(){
        return this.front == this.rear;
    }
    isFull(){
        return (this.rear+1) % this.capacity == this.front;
    }

}
