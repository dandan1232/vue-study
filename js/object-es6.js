
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

// let player =new Player('tom',20)
// player.printInfo()

// const player=new Player('tom',20)
// // player.printInfo()
// // Player =new Player('jack',30)
// player.name='jack'
// player.printInfo()

//继承
// class BestPlayer extends Player{
//     constructor(){
//         super()
//         this.name='hello'
//         this.age=20
//     }
// }

// es6字面量定义对象简写
// es5
let name = 'jack'
let age = 33
let play = {
    name: name,
    age: age,
    printInfo: function () {
        console.log(play)
    }

}
play.printInfo()

//es6
let name = 'jack'
let age = 33
let play = {
    name,
    age,
    printInfo() {
        console.log(play)
    }

}
play.printInfo()


// let bestPlayer =new BestPlayer()
// bestPlayer.printInfo()