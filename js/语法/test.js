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


var test=/^0[0-9]:[0-5][0-9]|1[0-9]:[0-5][0-9]|2[0-3]:[0-5][0-9]$/
console.log(test.test("23:29"))

var test2=/^[01][0-9]:[0-5][0-9]|2[0-3]:[0-5][0-9]$/
console.log(test2.test("23:29"))

var test3=/^([01][0-9]|2[0-3]):[0-5][0-9]$/
console.log(test3.test("23:29"))


// . 任何字符出现一次或多次后面紧跟着一个数字
var regex = /(?=.*[0-9])^[0-9A-Za-z]{6,12}$/;
console.log(regex.test("aaaaaa"))

// 一个数字
var regex = /(?=[0-9])^[0-9A-Za-z]{6,12}$/;
console.log(regex.test("aaaaaa"))

// 一个数字或多个数字
var regex = /(?=[0-9]+)^[0-9A-Za-z]{6,12}$/;
console.log(regex.test("aaaaaa"))

var regex = /(?!.*[0-9])^[0-9A-Za-z]{6,12}$/;
console.log(regex.test("aaaaaa"))







var result = "hello".replace(/(?!l)^/g, '#');
console.log(result);

var result = "hello".replace(/(?=l)/g, '#');
console.log(result);

