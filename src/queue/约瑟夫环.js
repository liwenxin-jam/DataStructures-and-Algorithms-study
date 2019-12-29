const Queue = require('./myqueue');

/**
 * 有一个数组a[1000]存放0--1000;要求每隔二个数删掉一个数，
 * 到末尾时循环至开头继续进行，求最后一个被删掉的数
 */
function delRing(arr_list) {
  let queue = new Queue.Queue();
  // 把数组里的元素都放入到队列中
  for (let i of arr_list) {
    queue.enqueue(i);
  }

  let index = 0,
    item;
  while (queue.size() !== 1) {
    // 弹出一个元素,判断是否需要删除
    item = queue.dequeue();
    index++;
    // 每隔两个就要删除掉一个,那么不是被删除的元素就放回到队列尾部
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.head();
}

let arr_list = [];
for (var i = 0; i < 3; i++) {
  arr_list.push(i);
}

console.log(delRing(arr_list));