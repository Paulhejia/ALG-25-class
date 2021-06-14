// https://www.jb51.net/article/97231.htm
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority);               
        if(!this.isEmpty()) {
            var added = false;
            for(let i = 0; i < this.items.length;i++) {
                if(priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    return;
                }
            }            
        }   
        this.items.push(queueElement);     
    }
    delQueue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    toString() {
        let result = "";
        for(let item of this.items) {
            result += item.element + '-' + item.priority + ' ';
        }
        return result;
    }
}

module.exports = PriorityQueue;