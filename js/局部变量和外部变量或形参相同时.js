// 局部变量和外部变量相同时
let a="out";
let fn=function(){
    let a;
    console.log(a);
}
// undefined 内部变量为undefined 时，还是按正常逻辑取就近原则的值
fn();


let a = "out";
let fn = function () {
    let a ="inside";
    console.log(a);
}
// inside
fn();

// 局部变量和形参相同时

function f1(a) {
    console.log(a);
    var a = 1;
    console.log(a);
    console.log(arguments[0])
}
f1(10)


// 注意： 由于变量提升 以上内容实际执行顺序为

function f1(a) {
    var a;
    console.log(a); //(1)
    a = 1;
    console.log(a); //(2)
    console.log(arguments[0]) // (3)
}
f1(10)


// 此时会有疑惑 ： var a; 此时a的值是 undefined,那么（1） 位置的输出为什么是10 呢
// js在执行时会对相同变量宣告作归纳的处理，以最近的变量指定作为变量在执行时的值。以第一例来说，第二行的var a只是个宣告，而不是赋值，除非在执行前的语句，都没有对a变量赋值的其他语句，a才会被js引擎当作undefined值，也就是"不知道是什么东西，没定义"。第二例则是直接赋给b变量个undefined，js引擎当然是就认为b是个undefined类型。
// 所以，以本问题的在函数中的第一个console.log(a); 来说，它a的值是10，而不是你认为的undefined。
//  个人觉得也可以这么理解 ： a的变量提升会在形参赋值之前执行，类似
function f1(a) {
    var a;
    a=a;
    console.log(a); //(1)
    a = 1;
    console.log(a); //(2)
    console.log(arguments[0]) // (3)
}
f1(10)
// 参考链接  https://segmentfault.com/q/1010000007278354   






