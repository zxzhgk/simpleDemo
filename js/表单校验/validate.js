/**
 * 校验规则
 * @param {}
 */
let rules={
    isEmpty(value,errorMsg){
        if(value===""){
            return errorMsg;
        }
    }
}
/**
 * 校验类
 */
class Validator{
    constructor(){
        // 缓存校验规则
        this.cache=[];
    }
    /**
     * @description:将对应规则生成函数加入cache中
     * @param {type} value
     * @param {type} rule
     * @param {type} errorMsg
     * @return: 
     */
    add(value,rule,errorMsg){
        // 把校验的步骤用空函数包装起来，并且放入cache 
        this.cache.push(function(){ 
            return rules[rule](value,errorMsg); 
        }); 
    }
    // 启动校验
    start(){
        for(let i=0,validatorFunc;i<this.cache.length;i++){
            validatorFunc=this.cache[i];
            var errorMsg = validatorFunc(); // 开始校验，并取得校验后的返回信息
            if ( errorMsg ){ // 如果有确切的返回值，说明校验没有通过
                return errorMsg; 
            } 
        } 
    }
}

let validator=new Validator();
validator.add("张三","isEmpty","不能为空")
validator.add("","isEmpty","不能为空")
console.log(validator.start());

