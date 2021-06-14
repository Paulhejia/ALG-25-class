const Stack = require('./index');

const stack = new Stack();
// test push
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.items);
// test pop
console.log(stack.pop());

// test peek
console.log(stack.peek());

// isEmpty
console.log(stack.isEmpty());

// size
console.log(stack.size());

// toString
console.log(stack.toString());

