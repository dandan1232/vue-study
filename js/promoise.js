
// 异步
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 3000)
//     }, 2000)
// }, 1000)
// console.log(4)

// callback hell回到地狱
// Pending,fulfilled、Rejected
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1');
        resolve('hello')
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p2');
        resolve(3 + 4)
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p3');
        resolve(['aaa', 'bbb'])
    }, 3000)
})

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log('全部完成')
//     console.log(res)
// })

Promise.race([p1,p2, p3]).then((res) => {
    console.log('全部完成')
    console.log(res)
})