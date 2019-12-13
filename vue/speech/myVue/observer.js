class Observer {
    constructor(data){
        this.observe(data)
    }
	// 对数据进行响应化
    observe(data){
        if(!data||typeof data!=='object'){
            return;
        }
        Object.keys(data).forEach(key=>{
            this.defineReactive(data,key,data[key]);
            this.observe(data[key]);
        })
    }
	// 对obj的属性,设置通过get和set取值和存值
    defineReactive(obj,key,value){
        let that=this;
		// 每个属性实例化一个依赖收集实例;
        let dep=new Dep();
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){
				// 判断依赖收集器是否已经设置了关联的Watcher;
				// 如果已经关联了Watcher; 则吧这个观察者收集进当前属性依赖的数组里;
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newValue){//给data属性中设置新的值的时候 更改获取的属性的值
                if(newValue!=value){
                    //这里的that是 Observer类的实例
                    that.observe(newValue);//如果是对象 就继续劫持
                    value=newValue;
                    dep.notify();
                }
            }
        })
    }

}