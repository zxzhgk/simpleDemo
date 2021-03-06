// 模拟 new 关键字执行过程
function myNew(func){
    let newObj={};
    newObj._proto_=func.prototype;
    func.call(newObj);
    return newObj;
}
// 1.创建一个空的简单JavaScript对象（即{}）；
// 2.关联该对象的原型链为构造函数的原型对象；
// 3.将新创建的对象作为this的上下文 ；
// 4.如果该函数没有返回对象，则返回this。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
    
