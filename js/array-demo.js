// let arr =['apple','banana','pear']
// console.log(arr) //[ 'apple', 'banana', 'pear' ]
// console.log(arr[1]) //banana

// // 数组解构赋值， 数组拍平、降维
let [item1, item2, item3] = ['apple', 'banana', 'pear']
console.log(item1) //apple

//嵌套数组的解构
// 规则的模式匹配
let [item4, [[item5], item6]] = ['aaa', [['bbb'], 'ccc']]
console.log(item4)
console.log(item5)
console.log(item6)
console.log()

//非规则模式,嵌套数组解构赋值
let [item7, [[item8, item10], item9]] = ['aaa', [['bbb', 'ccc'], ['ddd', 'eee']]]
console.log(item7)
console.log(item8)
console.log(item10)
console.log(item9)
console.log()

//...
let [item11, item12, ...other] = ['aaa', 'bbb', 'ccc', 'ddd']
console.log(item11)
console.log(item12)
console.log(other)
console.log()

//对象解构赋值
// 只要变量名对上即可，顺序无所谓
// 简写
let { age, name } = { name: 'tom', age: 30 }
console.log(name + '------' + age)
console.log()

// 解构成员函数
let { sqrt, sin, cos } = Math
console.log(sqrt(36))
console.log()

//字符串解构
let [a, b, c] = 'javascript'
// let [a,b,c,...other]='javascrpt'
console.log(a)
console.log(b)
// console.log(other)
console.log(typeof (a))
// console.log(typeof (other))