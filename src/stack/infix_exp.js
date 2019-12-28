const Stack = require('./mystack.js')

// 定义运算符的优先级
const priority_map = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};

// 中续表达式转成后续表达式 ["12","+", "3"] => ["12","3", "+"]
function infixExpToPostfixExp(exp) {
  let stack = new Stack.Stack();
  // 不合法数据
  if (Object.prototype.toString.call(exp) !== "[object Array]" || exp.length % 2 === 0) {
    return false;
  }

  // 存储后续表达式
  let postfix_lst = [],
    item;
  for (let value of exp) {
    // 判断一个值是数字，isNaN()的缺点就在于 null、空格以及空串会被按照0来处理
    if (typeof value !== "number" && ['', null].includes(value.trim ? value.trim() : value)) {
      return false;
    }
    item = ['+', '-', '*', '/', '(', ')'].includes(value) ? value : +value;
    if (!isNaN(item)) {
      postfix_lst.push(item);
    } else if (item === "(") {
      // 遇到左括号入栈
      stack.push(item);
    } else if (item === ")") {
      // 遇到右括号，把栈顶元素弹出，直到遇到左括号
      while (stack.top() !== "(") {
        postfix_lst.push(stack.pop());
      }
      // 左括号出栈
      stack.pop();
    } else {
      // 遇到运算符，把栈顶的运算符弹出，直到栈顶的运算符优先级小于当前运算符
      while (!stack.isEmpty() && ['+', '-', '*', '/'].includes(item) && priority_map[stack.top()] >= priority_map[item]) {
        postfix_lst.push(stack.pop());
      }
      // 当前的运算符入栈
      stack.push(item);
    }
  }

  // for循环结束后，栈里可能还有元素，都弹出放入到postfix_lst中
  while (!stack.isEmpty()) {
    postfix_lst.push(stack.pop())
  }

  return postfix_lst;
}

// 12+3
console.log(infixExpToPostfixExp(["12", "+", "3"]))
// 2-3+2
console.log(infixExpToPostfixExp(["2","-", "3", "+", "2"]))
// (1+(4+5+3)-3)+(9+8)
var exp = ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8",")"];
console.log(infixExpToPostfixExp(exp))

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(infixExpToPostfixExp(exp))

console.log(infixExpToPostfixExp(["12","+", "3","*", "5"]))
console.log(infixExpToPostfixExp(["12","*", "3","+", "5"]))
console.log(infixExpToPostfixExp(["(","1","+","2",")","*", "(","1","+","6",")"]))
console.log(infixExpToPostfixExp(["1","+","(","12","+", "3","*", "5",")"]))