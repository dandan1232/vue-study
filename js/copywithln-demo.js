// copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
// array.copyWithin(target, start, end)
// 该函数有三个参数。
// target：目的起始位置。
// start：复制源的起始位置，可以省略，可以是负数。
// end：复制源的结束位置，可以省略，可以是负数，实际结束位置是end-1。

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr1.copyWithin(1, 3, 6)
console.log(arr1)

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr2.copyWithin(3)
console.log(arr2)

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr3.copyWithin(3, -3, -2)
console.log(arr3)