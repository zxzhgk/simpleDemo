class Compile{
    constructor(el,vm){
        // 获取当前实例关联的dom
        this.el=this.isElementNode(el) ? el : document.querySelector(el);
        this.vm=vm;
		// 如果存在DOM,开始解析模版
        if(this.el){ 
            //1.先把这些真实的dom移入到内存中 fragment (目的:存入内存中的fragment 修改节点不会触发页面的渲染)
            let fragment=this.nodeToFragment(this.el);
            //2.编译 => 从模版中提取想要的元素节点;例如 v-model和 插值 {{aaa}} 
            this.compile(fragment);
            //3.把编译好的fragment再塞回页面中
            this.el.appendChild(fragment);
        }
    }
	// 编译 => 从模版中提取想要的元素节点;例如 v-model和 插值 {{aaa}}
	compile(fragment){
	    // 获取元素节点
	    let  childNodes=fragment.childNodes;
	    Array.from(childNodes).forEach(node=>{
	        if(this.isElementNode(node)){
	            // 解析标签节点 如 div p ...
	            this.compileElement(node);
				// 递归遍历 例如多层嵌套 div>ul>li
				this.compile(node);
	            //
	        }else{
				// 解析文本节点 如 "我" "1312313" ...
	            this.compileText(node);
	        }
	    })
	
	};
    // 解析标签节点
	// node : 可以简单的理解为DOM节点
    compileElement(node){
       let attrs=node.attributes;//取出当前节点的属性
	   // 遍历当前元素的属性
        Array.from(attrs).forEach(attr=>{
            let attrName=attr.name;
			// 判断是否为指令 如 v-model v-for v-if ...
            if(this.isDirective(attrName)){
                // 存储属性的值
                let expr=attr.value;
				//type 为model text for if....
                let [,type]=attrName.split('-');
				// 执行对不同 type 的处理
                CompileUtil[type](node,this.vm,expr);
            //    事件的绑定 用下面这个v-on
            //     let [directiveName,eventName]=type.split(':');
            //     CompileUtil[directiveName](node,this.vm,expr,eventName);
            }
        })
    };
    compileText(node){
        //    形如{{a}} {{b}} {{c}}
        let expr=node.textContent;//去文本中的内容
        // 匹配 类似 {{aaa}}
        let reg=/{{(.+)}}/g;
        if(reg.test(expr)){
            //    node this.vm.$data expr
            CompileUtil['text'](node,this.vm,expr)
        }
    };
    
    nodeToFragment(el){//将el全部放在内存中
        //文档碎片 内存中的dom节点
        let fragment=document.createDocumentFragment();
        let firstChild;
        while(firstChild=el.firstChild){//图示意
            fragment.appendChild(firstChild)
        }
        // console.log("fragment----->",fragment);
        return fragment;//内存中的节点

    }
	// 是否为标签元素
	isElementNode(node){
	    return node.nodeType === 1;//1是元素 2是属性 3是文本...
	}
	//是不是指令
	isDirective(name){
	    return name.includes('v-');
	}
}
CompileUtil={
	// 从vm.$data 中根据 expr (类似属性:a.b.c) 取值
    getVal(vm,expr){
        expr=expr.split('.');//[message,a]

        return expr.reduce((prev,next)=>{//vm.$data.a
            return prev[next];
        },vm.$data)
    },
    getTextVal(vm,expr){
      return expr.replace(/\{\{([^}]+)\}\}/g,(...argumments)=>{
          // console.log(argumments);
          return this.getVal(vm,argumments[1]);
        })
    },
	// v-text 指令的具体处理逻辑
    text(node,vm,expr){
        console.log();
        let updateFn=this.updater['textUpdater'];
        //{{message.a}}=>hello,xyy;
        let value=this.getTextVal(vm,expr);
        //{{a}} {{b}} {{c}}
        expr.replace(/\{\{([^}]+)\}\}/g,(...argumments)=>{
            new Watcher(vm,argumments[1],()=>{
                // 如果数据变化了，文本节点需要重新获取依赖的属性更新文本中的内容
                updateFn&&updateFn(node,this.getTextVal(vm,expr));
            });
        });

        updateFn&&updateFn(node,value);
    },
    setVal(vm,expr,value){//
        expr=expr.split('.');//[message,a]
        return expr.reduce((prev,next,currentIndex)=>{
            if(currentIndex===expr.length-1){
                return prev[next]=value;
            }
            return prev[next];
        },vm.$data)
    },
	// v-model 指令的具体处理逻辑
    model(node,vm,expr){
		// 获取到数据更新函数
        let updateFn=this.updater.modelUpdater;
        // 此处创建观察者;
		// 将来数据被变更后;通过依赖(dep) 触发观察者的回调函数达到数据更新
        new Watcher(vm,expr,()=>{
        //   当值变化后调用回调函数将新的值更新
            updateFn && updateFn(node,this.getVal(vm,expr));
        });
        //绑定事件
        node.addEventListener('input',(e)=>{
            let newValue=e.target.value;
			// 建input的值更新到对象上
            this.setVal(vm,expr,newValue);
        })
		// 第一次初始时,主动将数据同步给DOM
        updateFn && updateFn(node,this.getVal(vm,expr));
    },
    on(node,vm,expr,eventName){
        node.addEventListener(eventName,(e)=>{
            vm[expr].call(vm,e);
        })
    },
    updater:{
        //文本更新
        textUpdater(node,value){
            node.textContent=value;
        },
        //输入框更新
        modelUpdater(node,value){
            node.value=value;
        }
    }
};