class MPromise {
  constructor(handle) {
      let _self=this
      this._status = 'PENDDING'
      this._value = null
      this.callBackFuncs = []
      this.rejCallBackFuncs = []
      
      handle(_resolve,_reject)
      function _resolve(val){
        console.log(_self)
        if (_self._status !== 'PENDDING') return
        _self._status = 'FULLFILLED'
        _self._value = val
        _self.callBackFuncs.forEach(fn => {
            fn()
        })
      }
      function _reject(){
        if (_self._status !== 'PENDDING') return
        _self._status = 'REJECTED'
        _self.rejCallBackFuncs.forEach(fn => {
            fn()
        })
      }
  }

  then(onFulFilled) {
      if (this._status === 'PENDDING') {
          this.callBackFuncs.push(onFulFilled)
      } 
      if (this._status === 'FULLFILLED') {
          onFulFilled()
      }
  }
}

new MPromise((resolve, reject) => {
  resolve()
})