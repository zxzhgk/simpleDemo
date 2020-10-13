class MPromise {
  constructor(handle) {
      let _self=this
      this._status = 'PENDDING'
      this._value = null
      this.callBackFuncs = []
      this.rejCallBackFuncs = []
      // 实现方式 1
      // handle.call(this,this._resolve, this._reject)

      // 实现方式 2
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

  _resolve(val) {
      console.log(this)
      if (this._status !== 'PENDDING') return
      this._status = 'FULLFILLED'
      this._value = val
      this.callBackFuncs.forEach(fn => {
          fn()
      })
  }

  _reject() {
      if (this._status !== 'PENDDING') return
      this._status = 'REJECTED'
      this.rejCallBackFuncs.forEach(fn => {
          fn()
      })
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