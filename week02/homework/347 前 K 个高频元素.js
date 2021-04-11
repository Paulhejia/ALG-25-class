/* 
借助 哈希表 来建立数字和其出现次数的映射，遍历一遍数组统计元素的频率
维护一个元素数目为 kk 的最小堆
每次都将新的元素与堆顶元素（堆中频率最小的元素）进行比较
如果新的元素的频率比堆顶端的元素大，则弹出堆顶端的元素，将新的元素添加进堆中
最终，堆中的 kk 个元素即为前 kk 个高频元素 
*/


var topKFrequent = function(nums, k) {
    const map = new Object;
    for (let i = 0; i< nums.length; i++ ) {
        // hashMap 记录每个数字的长度
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1;
    }    
    const heap = new MinHeap();
    // 循环 Map 插入k 小顶堆；
    for(let key in map) {
        if(heap.size() < k) {
            heap.insert(key);
        }
        else {
            if(map[key] > map[heap.peek()]) { // 这个判断超容易错，要分清下标与 key(元素): value（元素频次）
				console.log(key);
                heap.pop();
                heap.insert(key);
            }
        }
    }
    return heap.heap;
};

// 最小堆
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    getLeftIndex(i) {
        return i * 2 + 1;
    }

    getRightIndex(i) {
        return i * 2 + 2;
    }

    shiftUp(index) {
        if(index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }  
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1]= this.heap[i2];
        this.heap[i2] = temp;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return this.heap[0];
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
/* 
时间复杂度：O(n)O(n)，nn 表示数组的长度。首先，遍历一遍数组统计元素的频率，这一系列操作的时间复杂度是 O(n)O(n)；桶的数量为 n + 1n+1，所以桶排序的时间复杂度为 O(n)O(n)；因此，总的时间复杂度是 O(n)O(n)。
空间复杂度：很明显为 O(n)O(n) */