// 对象中的this指针
// this指针指向对象本身，通过this可以引用对象的属性和函数
// class Player{
//     // 构造函数
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     //定义成员函数
//     printInfo(){
//         console.log(this.name+' '+this.age)
//     }
// }

// let player = new Player('tom', 20)
// player.printInfo()

// this指针在使用中的一个问题
class Player {
    // 构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //定义成员函数
    // printInfo() {
    //     let _this = this
    //     setTimeout(function () {
    //         console.log(_this.name + '-----' + _this.age)
    //     }, 2000)
    // }

    // printInfo() {
    //     window.setTimeout(function () {
    //         console.log(this.name + '-----' + this.age)
    //     }.bind(this), 2000)
    // }


    printInfo() {
        setTimeout(() => {
            console.log(this.name + '-------' + this.age)
        }, 2000)
    }
}

let play2 = new Player('tom', 20)
play2.printInfo()