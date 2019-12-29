// 实现栈有两种方式，一种是数组，一种是链表。
// 先进先出（后进后出），它只允许你在队列的头部删除元素，在队列的末尾添加新的元素。
function Queue() {
  // 使用数组存储数据
  let items = [];

  // 向队伍尾部添加一个元素
  this.enqueue = (item) => {
    items.push(item);
  }

  // 移除队列头部的元素
  this.dequeue = () => {
    return items.shift();
  }

  // 获取队列头部的元素
  this.head = () => {
    return items.length ? items[0] : undefined;
  }

  // 返回队列尾部的元素
  this.footer = () => {
    return items.length ? items[items.length - 1] : undefined;
  };

  // 返回队列的大小
  this.size = () => {
    return items.length;
  }

  // 清空队列
  this.clear = () => {
    items = [];
  }

  // 判断是否为空队列
  this.isEmpty = () => {
    return items.length === 0;
  }
}

exports.Queue = Queue;