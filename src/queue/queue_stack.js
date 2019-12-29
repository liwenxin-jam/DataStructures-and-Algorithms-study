const Queue = require('./myqueue');

/**
 * 用两个队列实现一个栈,检验的是对栈与队列的理解
 */
function QueueStack() {
  let queue1 = new Queue.Queue(),
    queue2 = new Queue.Queue(),
    dataQueue = null, // 放数据的队列
    emptyQueue = null; // 空队列,备份使用

  // 确认哪个队列放数据,哪个队列做备份空队列
  let initQueue = () => {
    // 默认返回queue_1
    if (queue1.isEmpty()) {
      dataQueue = queue2;
      emptyQueue = queue1;
    } else {
      dataQueue = queue1;
      emptyQueue = queue2;
    }
  }

  // push方法
  this.push = (item) => {
    initQueue();
    dataQueue.enqueue(item);
  }

  // top方法
  this.top = () => {
    initQueue();
    return dataQueue.footer();
  }

  /**
   * pop方法要弹出栈顶元素，这个栈顶元素，其实就是queue的队尾元素
   * data_queue 和 empty_queue 交换了身份
   */
  this.pop = () => {
    initQueue();
    // 正常队尾元素是不能删除的，我们可以把data_queue里的元素(除了队尾元素)都移除放入到empty_queue中
    while (dataQueue.size() > 1) {
      emptyQueue.enqueue(dataQueue.dequeue());
    }
    // 最后只剩下一个元素，data_queue的队尾元素并返回
    return dataQueue.dequeue();
  }
}

let q_stack = new QueueStack();
q_stack.push(1);
q_stack.push(2);
q_stack.push(4);
console.log(q_stack.top()); // 栈顶是 4
console.log(q_stack.pop()); // 移除 4
console.log(q_stack.top()); // 栈顶变成 2
console.log(q_stack.pop()); // 移除 2
console.log(q_stack.pop()); // 移除 1