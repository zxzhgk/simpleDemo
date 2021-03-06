// 类模式
class Plane{
	constructor(arg) {
	    
	}
	fire(){
		console.log("pdzd")
	}
}
class Missile{
	constructor(plane) {
	    this.plane=plane;
	}
	fire(){
		this.plane.fire()
		console.log("dd")
	}
}
class Atom{
	constructor(plane) {
	    this.plane=plane;
	}
	fire(){
		this.plane.fire()
		console.log("yzd")
	}
}
let plane=new Plane();
plane=new Missile(plane);
plane=new Atom(plane);
plane.fire()

// js 模式
let Plane={
	fire(){
		console.log("ptzd")
	}
}
function Missile(){
	console.log("dd")
}
function Atom(){
	console.log("yzd")
}
let fireM=Plane.fire;
Plane.fire=function(){
	fireM()
	Missile()
}
let fireA=Plane.fire;
Plane.fire=function(){
	fireA()
	Atom()
}
Plane.fire();
// AOP 基础版本
Function.prototype.after=function(afterFn){
	let __self=this;// 保存 this 指向
	return function(){
		__self.apply(this,arguments)
		afterFn.apply(this,arguments)
	}
}
Function.prototype.before=function(beforeFn){
	let __self=this;
	return function(){
		beforeFn.apply(this,arguments)
		__self.apply(this,arguments)
	}
}
function test(){
	console.log("2");
}
test=test.after(function(){
	console.log("3")
}).before(function(){
	console.log("1")
})

// 测试版本
Function.prototype.after=function(afterFn){
	let __self=this;// 保存 this 指向
	return function(){
		__self(arguments)
		afterFn.apply(this,arguments)
	}
}
Function.prototype.before=function(beforeFn){
	let __self=this;
	return function(){
		beforeFn.apply(this,arguments)
		__self(arguments)
	}
}
let aa="winaa"
let tO={
	aa:"tOaa",
	test(){
		console.log(this.aa)
	}
}
tO.test=tO.test.after(function(){
	console.log("3")
}).before(function(){
	console.log("1")
})
tO.test();
// 装饰函数
