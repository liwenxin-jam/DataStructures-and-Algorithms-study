const Stack = require('./mystack.js');

/**
 * 用两个栈实现一个队列
 */
function StackQueue() {
  let stack1 = new Stack.Stack(),
    stack2 = new Stack.Stack();

  // 总是把数据放入到stack1中
  this.enqueue = (item) => {
    stack1.push(item);
  }

  // 获得队列的头
  this.head = () => {
    // 两个栈都是空的
    if (stack1.isEmpty() && stack2.isEmpty()) {
      return null;
    }

    // 如果stack2 是空的,那么stack1一定不为空,把stack1中的元素倒入stack2
    if (stack2.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
    }

    return stack2.top();
  }

  // 出队列
  this.dequeue = () => {
    // 两个栈都是空的
    if (stack1.isEmpty() && stack2.isEmpty()) {
      return null;
    }

    // 如果stack2 是空的,那么stack1一定不为空,把stack1中的元素倒入stack2
    if (stack2.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
    }

    return stack2.pop();
  }
}

var sq = new StackQueue();
sq.enqueue(1);
sq.enqueue(4);
sq.enqueue(8);
console.log(sq.head());
sq.dequeue();
sq.enqueue(9);
console.log(sq.head());
sq.dequeue();
console.log(sq.head());
console.log(sq.dequeue());
console.log(sq.dequeue());