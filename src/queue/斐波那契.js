const Queue = require('./myqueue');

/**
 * 用队列来计算斐波那契
 */
function fibonacci(n) {
  let queue = new Queue.Queue(),
    index = 0,
    delItem, // 前一次计算待删除的prev元素
    headItem, // 前一次计算的next元素
    nextItem; // 下一次计算的prev无素，等价于上一次prev元素+next元素总和

  // 先放入斐波那契序列的前两个数值
  queue.enqueue(1);
  queue.enqueue(1);
  while (index < n - 2) {
    // 出队列一个元素
    delItem = queue.dequeue();
    // 取队列头部元素
    headItem = queue.head();
    nextItem = delItem + headItem;
    // 将计算结果放入队列
    queue.enqueue(nextItem);
    index++;
  }

  // 每一次计算都有prev和next元素，把上一次的结果prev元素弹出栈顶，剩下的就是next结果
  queue.dequeue();
  return queue.head();
}

console.log(fibonacci(8));