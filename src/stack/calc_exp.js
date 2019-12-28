const Stack = require('./mystack.js')

/**
 * 实现calc_exp函数，计算逆波兰表达式（后缀表达式）。相当于后续表达式转成中续表达式计算结果
 * ["4", "13", "5", "/", "+"] 等价于(4 + (13 / 5)) = 6
 * ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 等价于((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 */
function calcExp(exp) {
  let stack = new Stack.Stack();
  // 不合法数据
  if (Object.prototype.toString.call(exp) !== "[object Array]" || exp.length % 2 === 0) {
    return false;
  }

  for (let s of exp) {
    // 判断是否是运算操作符
    if (['+', '-', '*', '/'].includes(s)) {
      if (stack.size() < 2) {
        return false;
      }

      // 从栈顶取出左右操作数，注意val2是左操作数，因为它是先入栈的
      let val1 = stack.pop(),
        val2 = stack.pop();

      // 拼成表达式，并计算取整
      let res = Number.parseInt(eval(val2 + s + val1));
      // 将新的结果压入栈
      stack.push(res)
    } else {
      stack.push(s);
    }
  }

  // 表达式如果是正确的，最终栈里还有一个元素，且正是表达式的计算结果
  return stack.size() === 1 ? stack.pop() : false;
}

let exp_1 = ["4", "13", "5", "/", "+"];
let exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
let exp_3 = ['1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+'];
console.log(calcExp(exp_1));
console.log(calcExp(exp_2));
console.log(calcExp(exp_3));