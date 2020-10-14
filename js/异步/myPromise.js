let p = new Promise(function (resolve, reject) {
  console.log('start')
  resolve('data1')
})
p.then(
  (v) => {
    console.log('success： ' + v)
  },
  (v) => {
    console.log('error： ' + v)
  }
)
console.log('end')
setTimeout(()=>{
  // ---------- 初始版本-----------------
  function myPromise(executor){
    let self=this;
    self.status="pending"
    function resolve(value){
      if(self.status=="pending"){
        self.value=value;
        self.status="resolved";
      }
    }
    function reject(reason){
      if(self.status=="pending"){
        self.reason=reason;
        self.status="rejected"
      }
    }
    executor(resolve, reject) // 初始化时立即执行 executor 
  }
  myPromise.prototype.then=function(onFulfilled,onRejected){
    let self=this;
    if(self.status=="resolved"){
      onFulfilled(self.value)
    }
    if(self.status=="rejected"){
      onRejected(self.reason)
    }
  }
  
  let myp = new myPromise(function (resolve, reject) {
    console.log('-------------------myPromise 基础版本---------------------')
    console.log('start')
    resolve('data1')
  })
  myp.then(
    (v) => {
      console.log('success： ' + v)
    },
    (v) => {
      console.log('error： ' + v)
    }
  )
  console.log('end')
},0)

setTimeout(()=>{
  // ---------- 异步版本 ---------------
  function myPromise(executor){
    let self=this;
    self.status="pending"
    // 用来保存then 方法中，第一个参数
    self.onResolvedCallbacks = []
    // 用来保存then 方法中，第二个参数
    self.onRejectedCallbacks = []
    function resolve(value){
      if(self.status=="pending"){
        self.value=value;
        self.status="resolved";
        self.onResolvedCallbacks.forEach(item=>{
          debugger
          item();
        })
      }
    }
    function reject(reason){
      if(self.status=="pending"){
        self.reason=reason;
        self.status="rejected"
        self.onRejectedCallbacks.forEach(item=>{
          item();
        })
      }
    }
    executor(resolve, reject) // 初始化时立即执行 executor 
  }
  myPromise.prototype.then=function(onFulfilled,onRejected){
    let self=this;
    if(self.status === 'pending'){
      debugger
      self.onResolvedCallbacks.push(function(){
        onFulfilled(self.value)
      })
      self.onRejectedCallbacks.push(function(){
        onRejected(self.reason)
      })
    }
    if(self.status=="resolved"){
      onFulfilled(self.value)
    }
    if(self.status=="rejected"){
      onRejected(self.reason)
    }
  }
  
  let mypAsync = new myPromise(function (resolve, reject) {
    console.log('-------------------myPromise 异步版本---------------------')
    console.log('start')
    setTimeout(()=>{
      debugger
      resolve('data1')
    },2000)
  })
  mypAsync.then(
    (v) => {
      debugger
      console.log('success： ' + v)
    },
    (v) => {
      console.log('error： ' + v)
    }
  )
  console.log('end')









},0)

