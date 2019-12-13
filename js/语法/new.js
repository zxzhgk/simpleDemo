// 模拟 new 关键字执行过程
function new(func){
    let newObj={};
    newObj._proto_=func.prototype;
    func.call(newObj);
    return newObj;
}

    
