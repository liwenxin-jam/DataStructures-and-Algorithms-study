const Stack = require('./mystack')

/**
 * 判断字符串里的括号是否合法
 * "sdf(ds(ew(we)rw)rwqq)qwewe"  合法
 * "(sd(qwqw)sd(sd))"    合法
 * "()()sd()(sd()fw))("  不合法
 */
function isLeaglBrackets(str) {
  // 不合法数据直接return
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }

  let stack = new Stack.Stack();

  for (let s of str) {
    if (s === "(") {
      // 将左括号压入栈
      stack.push(s);
    } else if (s === ")") {
      // 如果为空,就说明没有左括号与之抵消
      if (stack.isEmpty()) {
        return false;
      }
      // 将栈顶的元素弹出
      stack.pop();
    }
  }

  return stack.isEmpty();
}

console.log(isLeaglBrackets("()()))"));
console.log(isLeaglBrackets("sdf(ds(ew(we)rw)rwqq)qwewe"));
console.log(isLeaglBrackets("()()sd()(sd()fw))("));