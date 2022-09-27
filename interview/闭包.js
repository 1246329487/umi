// function createCounter() {
//   let counter = 0
//   const myFunction = function () {
//     counter = counter + 1
//     return counter
//   }
//   return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)




// for ( var i = 0; i < 5; i++) {
//     (function (i){
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000*i);
//     })(i)
// }
// setTimeout(() => {
//     console.log(new Date, i);
// }, 5000);


// const tasks = [];
// for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
//     ((j) => {
//         tasks.push(new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(new Date, j);
//                 resolve();  // 这里一定要 resolve，否则代码不会按预期 work
//             }, 1000 * j);   // 定时器的超时时间逐步增加
//         }));
//     })(i);
// }

// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000);   // 注意这里只需要把超时设置为 1 秒
// });

// const tasks = []; // 这里存放异步操作的 Promise
// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(new Date, i);
//         resolve();
//     }, 1000 * i);
// });

// // 生成全部的异步操作
// for (var i = 0; i < 5; i++) {
//     tasks.push(output(i));
// }

// // 异步操作完成之后，输出最后的 i
// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000);
// });


// 模拟其他语言中的 sleep，实际上可以是任何异步操作
// const sleep = (timeountMS) => new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => {  // 声明即执行的 async 函数表达式
//     for (var i = 0; i < 5; i++) {
//         if (i > 0) {
//             await sleep(1000);
//         }
//         console.log(new Date, i);
//     }

//     await sleep(1000);
//     console.log(new Date, i);
// })();

const pro = (timeout) => {
  return new Promise((res) => {
    setTimeout(res, timeout)
  })
}

(async () => {
  for (var i = 0; i < 5; i++) {
    await pro(1000)
    console.log(i)
  }
  await pro(1000)
console.log('执行',i);
})()
