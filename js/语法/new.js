function new(func){
    let newObj={};
    newObj._proto_=func.prototype;
    func.call(newObj);
    return newObj;
}

    
