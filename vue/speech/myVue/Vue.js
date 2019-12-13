class Vue{
    constructor(options){
        // 先把可用的东西挂载在实例上
		this.$el=options.el;
		this.$data=options.data;

        // let computed=options.computed;
        // let methods=options.methods;
        //如果有要编译的的模板据就开始模板
        if(this.$el){
			//数据劫持 就是对象的所有属性 改成通过get和set方法取值和存值
			new Observer(this.$data);
			console.log(this.$data);
			//解析 指令 插值语法 等;注意解析需要在数据劫持之后执行;这样才能触发get方法从而触发依赖收集
            new Compile(this.$el,this);
			//代理数据
			this.proxyData();
        }
    }
    proxyData(){
        Object.keys(this.$data).forEach(key=>{
            Object.defineProperty(this,key,{
                get(){
                    return this.$data[key];
                },
                set(newValue){
                   this.$data[key]=newValue;
                }
            })
        })
    }
}