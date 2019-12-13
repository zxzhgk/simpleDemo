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
            //代理数据
            this.proxyData();
			//解析 指令 插值语法等
            new Compile(this.$el,this);
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