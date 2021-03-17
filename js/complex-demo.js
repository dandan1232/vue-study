function add([{ name: name1, age: age1 }, { name: name2, age: age2 }]) {
    console.log(name1 + name2)
    return age1 + age2
}
console.log(add([{ name: 'tom', age: 20 }, { name: 'jack', age: 22 }]))

// 以]结尾加上换行后以[开头不加分号，解释器会认为是在读数组
let a = 2;
let b = 3;
[a, b] = [b, a];
console.log(a + '-----' + b)

// ES6 map
let map = new Map()
map.set('item1', 'aaa')
map.set('item2', 'bbb')
console.log(map)
for (let [key, value] of map) {
    //模板字符串
    console.log(`${key}----${value}`)
    console.log(key+'-------'+value)
}