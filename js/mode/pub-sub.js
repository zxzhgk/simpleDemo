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
        fns.forEach(item=>{
            item(...msg);
        })
    }
}
let events=new Event();
class SalesOffice extends Event {
    constructor(){
        super();
    }
}
let salesOffice=new SalesOffice();
console.log(salesOffice)
salesOffice.listen("a",(price,size)=>{
    console.log("a")
    console.log(price+"---"+size)
})
salesOffice.listen("b",(price,size)=>{
    console.log("b")
    console.log(price+"---"+size)
})

salesOffice.trigger("a",100,20);
salesOffice.trigger("b",200,10);
