//观察者类: 就是给需要变化的属性增加一个观察者，当数据变化后执行 update 方法更新数据
class Watcher {
    constructor(vm,expr,cb){
		this.name;
        this.vm=vm;
        this.expr=expr;
        this.cb=cb;
        // 先存一下旧值
        this.value=this.get();
		// 第一次初始时,主动执行一次回调函数将数据同步给DOM
		cb && cb(this.value)
    }
	// 从vm.$data 中根据 expr (类似属性:"a.b.c") 取值
    getVal(vm,expr){
        expr=expr.split('.');//[message,a]
        return expr.reduce((prev,next)=>{//vm.$data.a
			// 注意: 此时会访问 vm.$data.message 触发 message属性的取值get函数
			this.name=next;
            return prev[next];
        },vm.$data)
    }
    get(){
        Dep.target=this;
        let value=this.getVal(this.vm,this.expr);
        Dep.target=null;
        return value;
    }
    update(){
        let newValue=this.getVal(this.vm,this.expr);
        let oldValue=this.value;
        if(newValue!=oldValue){
            this.cb(newValue);
        }
    }
}