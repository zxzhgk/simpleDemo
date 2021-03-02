class Event{
    constructor(){
        this.eventList={};
    }
    listen(key,fn){
        !this.eventList[key] ? this.eventList[key]=[] : "";
        this.eventList[key].push(fn)
    }

    trigger(...msg){
        let key=msg.shift();
        let fns=this.eventList[key];
        if(!fns || fns.length==0){
            return false;
        }
        for(let item of fns){
            item.apply(this,msg)
        }
    }
    remove(key,fn){
        console.log(key,fn);
        let funs=this.eventList[key];
        if(!funs || !funs.length){
            return;
        }
        if(!fn){
            funs.length=0;
            return;
        }
        funs.forEach((item,index) => {
            if(item === fn){
                funs.splice(index,1);
            }
        });
    }
}
class SalesOffice extends Event {
    constructor(){
        super();
    }
}
let salesOffice=new SalesOffice();
// console.log(salesOffice)
salesOffice.listen("a",function(price,size){
    console.log("a")
    console.log(this)
    console.log(price+"---"+size)
})
salesOffice.listen("b",function(price,size){
    console.log("b")
    console.log(this)
    console.log(price+"---"+size)
})
salesOffice.remove("a")
salesOffice.trigger("a",100,20);
salesOffice.trigger("b",200,10);




var myevent = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn); // 订阅的消息添加进缓存列表
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments), // (1);
            fns = this.clientList[key];
        if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments); // (2) // arguments 是 trigger 时带上的参数
        }
    }
};
myevent.remove = function (key, fn) {
    var fns = this.clientList[key];
    if (!fns) { // 如果 key 对应的消息没有被人订阅，则直接返回
        return false;
    }
    if (!fn) { // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
        fns && (fns.length = 0);
    } else {
        for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
            var _fn = fns[l];
            if (_fn === fn) {
                fns.splice(l, 1); // 删除订阅者的回调函数
            }
        }
    }
};
var installEvent = function (obj) {
    for (var i in myevent) {
        obj[i] = myevent[i];
    }
};
var salesOffices = {};
var installEvent = function (obj) {
    for (var i in myevent) {
        obj[i] = myevent[i];
    }
}
installEvent(salesOffices);
salesOffices.listen('squareMeter88', fn1 = function (price) { // 小明订阅消息
    console.log(this)
    console.log('价格= ' + price);
});
salesOffices.listen('squareMeter88', fn2 = function (price) { // 小红订阅消息
    console.log('价格= ' + price);
});
// salesOffices.remove('squareMeter88', fn1); // 删除小明的订阅
salesOffices.trigger('squareMeter88', 2000000); // 输出：2000000
