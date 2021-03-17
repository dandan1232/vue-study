// Array.from方法用于将两类对象转为真正的数组：
// 类似数组的对象（array-like object）和
// 可遍历（iterable）的对象（ES6 新增的数据结构 Set 和Map）。

// 将类数组对象转换为真正数组：
let arrayLike = {
 0: 'tom', 
 1: '65',
 2: '男',
 3: ['jane','john','Mary'],
 'length': 4
}
let arr = Array.from(arrayLike)
console.log(arr) // ['tom','65','男',['jane','john','Mary']]

// let arrayLike = {
//     'name': 'tom', 
//     'age': '65',
//     'sex': '男',
//     'friends': ['jane','john','Mary'],
//     length: 4
//    }
//    let arr = Array.from(arrayLike)
//    console.log(arr) // [ undefined, undefined, undefined, undefined ]

// 结论
// 1、该类数组对象必须具有 length 属性，用于指定数组的长度。如果没有 length 属性，那么转换后的数组是一个空数组。
// 2、该类数组对象的属性名必须为数值型或字符串型的数字

// 将Set结构的数据转换为真正的数组：
let arr2 = [12,45,97,9797,564,134,45642]
let set = new Set(arr2)
console.log(Array.from(set)) // [ 12, 45, 97, 9797, 564, 134, 45642 ]

let arr5 = [12,45,97,9797,564,134,45642]
let set2 = new Set(arr5)
console.log(Array.from(set2, item => item + 1)) // [ 13, 46, 98, 9798, 565, 135, 45643 ]


//  在 Array.from 中使用箭头函数：
let arr1=Array.from([1, 2, 3], x => x + x);
console.log(arr1)
// [2, 4, 6]

Array.from({length:20},(t,i)=>i+1)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// 模拟生成 1万条数据，利用了 Array.from 来快速生成数据
const originNews = Array.from(
    { length: 10000 },
    (v, k) => ({ content: `新闻${k}` })
   )

//    将字符串转换为数组：
   let str = 'hello world!';
console.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// Array.from参数是一个真正的数组：
console.log(Array.from([12,45,47,56,213,4654,154]))