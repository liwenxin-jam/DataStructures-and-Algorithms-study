const Stack = require('./mystack.js')

// 封装一个有最小值的栈
function MinStack() {
  let data_stack = new Stack.Stack(), // 存储正常值
    min_stack = new Stack.Stack(); // 存储最小值

  // 覆写原先的栈方法，添加一个元素到栈顶
  this.push = (val) => {
    let item = +val;
    data_stack.push(item);

    if (min_stack.isEmpty() || item < min_stack.top()) {
      min_stack.push(item);
    } else {
      min_stack.push(min_stack.top());
    }
  }

  // 覆写原先的栈方法，弹出栈顶元素
  this.pop = () => {
    data_stack.pop();
    min_stack.pop();
  }

  // 添加一个新的min方法，返回栈的最小值
  this.min = () => {
    return min_stack.top();
  }
}

minstack = new MinStack();

//minstack.push(3);
//minstack.push(6);
//minstack.push(8);
//console.log(minstack.min());
//minstack.push(2);
//console.log(minstack.min());
//minstack.pop();
//console.log(minstack.min());

minstack.push(1);
minstack.push(2);
minstack.push(3);
console.log(minstack.min());
minstack.pop();
console.log(minstack.min());
minstack.pop();
console.log(minstack.min());