async function async1() {
    console.log('async1 start')
    await async2(); console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')


console.log('script start')
console.log('async1 start')
console.log('async2')
console.log('promise1')
console.log('script end')
console.log('async1 end')
console.log('promise2')
console.log('setTimeout')

console.log('script end')

const data = [
    {
        id: 1,
        title: "课程 1",
        children: [
            { id: 4, title: "课程 1-1" },
            {
                id: 5,
                title: "课程 1-2",
                children: [
                    { id: 6, title: "课程 1-2-1" },
                    { id: 7, title: "课程 1-2-2" },
                ],
            },
        ],
    },
    { id: 2, title: "课程 2" },
    { id: 3, title: "课程 3" },
];
function flatData(data){
    let mydata=data.reduce((acc, item, index) => {
        // hasOwnProperty
        if(item.hasOwnProperty("children")){
            let children = item.children;
            delete item.children;
            // acc.push(item);
            // acc=acc.concat(flatData(children));
            acc=[item,...flatData(children),...acc]
            return acc;
        }else{
            acc.push(item);
            return acc
        }
    },[])
    return mydata;
}
console.log(flatData(data))

function debounce(fn,delay){
    let time;
    return function (){
        clearTimeout(time);
        time=setTimeout(() => {
            fn.apply(this,arguments);
        }, delay);
    }
}
function throttle(fn,delay){
    let time;
    return function (){
        if(!time){
            time=setTimeout(() => {
                fn.apply(this,arguments);
                time=null
            }, delay);
        }
    }
}
let num = 10;
function test(arg){
    console.log(arg)
    console.log(this);
}
let a={
    aa:"aaa",
    test:test
}
test1=debounce(a.test,200)
test2=throttle(test,400)
let time=setInterval(() => {
    if(num){
        num--;
        test1("111");
        test2("222");
    }
}, 100);

