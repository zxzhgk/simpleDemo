console.log(1 && 2)

console.log(1 && 2 || 3)

console.log("aaa" === String("aaa"))

console.log("aaa" === new String("aaa"))

console.log("aaa" == new String("aaa"))

------------------------------------------------------------------

请写出如下代码的执行结果：

function sayHi(){
    console.log(this.name);
}

var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
var person1 = {
    name: 'YvetteLau',
    friend: person2
}

person1.friend.sayHi();

-------------------------------------------------------------------

function sayHi(){
    console.log(this.name);
}
var person1 = {
    name: 'YvetteLau',
    sayHi: function(){
        setTimeout(function(){
            console.log(this.name);
        })
    }
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
var name='Wiliam';

person1.sayHi();
setTimeout(person2.sayHi,100);

-------------------------------------------------------------------

什么是原型链? 主要用来解决什么问题

-------------------------------------------------------------------

实现一个函数，返回两个数之间的一个随机数


-------------------------------------------------------------------

let age1=1;
let newAge1= --age1 + 2
console.log(newAge1)


-------------------------------------------------------------------

let arr=[1,1,2,3,4,5,5,4,1];

如何对arr进行去重

-------------------------------------------------------------------

let a=1,b=2;

如何快速的互换它们的值


------------------------------------------------------------------

Promise 主要可以解决什么问题

------------------------------------------------------------------
let user={
    name:"",
    age:18,
    interest:["玩游戏","跑步","游泳"]
}

如何对user深拷贝

-----------------------------------------------------------------




function getRandomArbitrary(min, max) {
  

}