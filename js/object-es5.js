//es5如何定义对象：原型链
// 定义对象
function Player(name, age) {
    this.name = name
    this.age = age
}

// 成员函数挂载在对象的原型链上
Player.prototype.myMethod = function () {
    console.log(this.name + '-----' + this.age)
}

var player1=new Player('tom',20)
var Player2=new Player('jack',22)

player1.printInfo()
Player2.printInfo()