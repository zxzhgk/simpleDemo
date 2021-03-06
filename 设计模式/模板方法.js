/**
 * @description: 具有饮料制作过程的模板方法(烧水，导入杯子，加入配料)
 */
function Template(options){
  let step1=options.step1 || function(){
    throw("step1")
  }
  let step2=options.step2 || function(){
    throw("step2")
  }
  let step3=options.step3 || function(){
    throw("step3")
  }
  let fn=function(){};
  fn.prototype.init=function(){
    // 定义模板结构和顺序
    step1();
    step2();
    step3();
  }
  return fn;
}
let Tea=Template({
  // 具体的实现
  step1:function(){
    console.log("1111")
  },
  step2:function(){
    console.log("222")
  },
  step3:function(){
    console.log("3333")
  },
})
let tea=new Tea();
tea.init();
