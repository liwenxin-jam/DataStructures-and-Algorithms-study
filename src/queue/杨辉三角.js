const Queue = require('./myqueue');

/**
 * 用队列输出杨辉三角的前n行 n >= 1
 */
function print_yanghui(n) {
  let queue = new Queue.Queue();
  queue.enqueue(1);

  // 第一层for循环控制打印几层
  for (let i = 1; i <= n; i++) {
    let line = "",
      pre = 0;
    // 第二层for循环控制打印第 i 层
    for (let j = 0; j < i; j++) {
      let item = queue.dequeue();
      line += item + " ";
      // 计算下一行的内容
      let value = item + pre;
      pre = item;
      queue.enqueue(value);
    }
    // 每一层最后一个数字是1,上面的for循环没有计算最后一个数
    queue.enqueue(1);
    // 增加空格显示
    let space = " ".repeat(n - i);
    line = space + line;
    console.log(line);
  }
}

// 每一行的数据后面多存储一个0，使用这个0作为分界点。如果dequeue返回的是0，说明这一行已经全部输出。此时，重新将这个0追加到队列末尾
function print_yanghui_2(n) {
  let queue = new Queue.Queue();
  queue.enqueue(1);
  queue.enqueue(0);

  // 第一层for循环控制打印几层
  for (let i = 1; i <= n; i++) {
    let line = "",
      pre = 0;
    // 第二层for循环控制打印第 i 层
    while (true) {
      let item = queue.dequeue();
      // 用一个0把每一行的数据分割开，遇到0不输出
      if (item === 0) {
        // 每一层最后一个显示的数字是1
        queue.enqueue(1);
        queue.enqueue(0);
        break;
      } else {
        // 计算下一行的内容
        line += item + " ";
        let value = item + pre;
        pre = item;
        queue.enqueue(value);
      }
    }
    // 增加空格显示
    let space = " ".repeat(n - i);
    line = space + line;
    console.log(line);
  }
}

// print_yanghui(4);
print_yanghui_2(10);