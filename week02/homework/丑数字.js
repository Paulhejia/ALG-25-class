// 每次
// 跟面试题 17.09. 第k个数一样的做法，任何丑数乘以2、3、5，其结果也是丑数（证明略），我们可以利用小根堆，然后1作为第一个丑数，每次从小根堆弹出最小的丑数，然后记录已弹出丑数的个数，如果count>=n,返回当前弹出的元素，否则继续乘以2、3、5，（注意：放入堆里的元素需要排除重复值）
/* 小根堆，可以获取堆顶最小值；
不断pop堆顶最小值，直到K次； 

时间复杂度：O(nlogn)。得到第 n 个丑数需要进行 n次循环，每次循环都要从最小堆中取出 1 个元素以及向最小堆中加入最多 33 个元素，因此每次循环的时间复杂度是 O(logn+log3n)=O(logn)，总时间复杂度是O(nlogn)。
space: O(n)
*/

var nthUglyNumber = function(n) {
    const factors = [2, 3, 5];
    const seen = new Set();
    const heap = new MinHeap();
    seen.add(1);
    heap.insert(1);
    let ugly = 0;
    for (let i = 0; i < n; i++) {
        ugly = heap.pop();
        for (const factor of factors) {
            const next = ugly * factor;
            if (!seen.has(next)) { //去重
                seen.add(next);
                heap.insert(next);
            }
        }
        
    }
    return ugly;
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

// 三指针 动态规划，感觉场景十分少了，但是 空间复杂度优化了
/* time ：O(N) 
space: O(N) */
function solution(n) {
    let u2 = 0, u3 = 0, u5 = 0;
    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        const num2 = dp[u2] * 2;
        const num3 = dp[u3] * 3;
        const num5 = dp[u5] * 4;
        dp[i] = Math.min(Math.min(num2, num3), num5);
        if(dp[i] === num2) {
            u2++;
        }
        else if(dp[i] === num3) {
            u3++;
        }
        else if(dp[i] === num5) {
            u5++;
        }
    }
    return dp[n-1];
}