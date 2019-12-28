// 实现栈有两种方式，一种是数组，一种是链表。数组是最简单的一种方式
// 定义一个Stack类，实现栈这种数据结构，先进后进（后进先出）
function Stack() {
  // 使用数组存储数据
  let items = [];

  // 添加一个元素到栈顶
  this.push = (item) => {
    items.push(item);
  }

  // 弹出栈顶元素
  this.pop = () => {
    return items.pop();
  }

  // 返回栈顶元素
  this.top = () => {
    return this.isEmpty() ? undefined : items[items.length - 1];
  }

  // 判断栈顶是否为空
  this.isEmpty = () => {
    return items.length === 0;
  }

  // 返回栈里元素的个数
  this.size = () => {
    return items.length;
  }

  // 清空栈
  this.clear = () => {
    items = [];
  }
}

exports.Stack = Stack;