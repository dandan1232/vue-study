// Create by ldd on 210312
// js的作用域

if (true){
    var externalVal='externalVal'
    
}

function domainTest(){
    var funVal = 'funVal'
    console.log(externalVal+ '--------'+funVal)
}

domainTest()

if(true){
    console.log(externalVal)
    console.log(fun)
}