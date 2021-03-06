// 对象类型是按引用传值 ？ 是的
var arr=[1,2]
function change(param){
  param[0]="haha"
}
console.log(arr)
change(arr)
console.log(arr)
// [1, 2]
// ["haha", 2]

// 浅拷贝引用类型值参数 -》 修改拷贝后的值不影响拷贝前的
var arr=[1,2]
function change(param){
  let clone=param.slice()
  clone[0]="haha"
}
console.log(arr)
change(arr)
console.log(arr)
// [1, 2]
// [1, 2]

// 浅拷贝引用值 修改拷贝后的值不影响拷贝前的
var obj={name:"zs"}
function change(param){
  let clone=Object.assign({},param)
  clone.name="ls"
}
console.log(obj)
change(obj)
console.log(obj)
// {name:"zs"}
// {name:"zs"}

// 深层浅拷贝引用值 - 如果是参数值是多层引用类型值，则内部的值改动会影响外层数据
var arr=[{name:"zs"}]
function change(param){
  let clone=param.slice()
  clone[0].name="ls"
}
console.log(arr)
change(arr)
console.log(arr)
// 影响外层数据

// var 定义for 循环打印后同一值的原因
// var data = [];
// var i;
// for (i = 0; i < 3; i++) {
//   data[i] = function () {
//     console.log(i);
//   };
// }
// data[0]();
// data[1]();
// data[2]();
// 简化就是如下：函数执行是在值改变完以后，参数i是全局变量
var index=1;
function change(){
    console.log(index)
}
index=2;
change()