//手写简单的promise
class Promise {
  constructor (fn) {
    // 三个状态
    this.state = 'pending'
    // 成功返回的值
    this.value = ''
    // 失败返回的值
    this.error = ''

    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }

    let reject = error => {
      if(this.state === 'pending') {
        this.state = 'rejected'
        this.error = error
      }
    }

    // 自执行函数
    try {
      fn(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }

  then (resolveCb) {
    switch(this.state){
      case 'fulfilled':
        resolveCb(this.value)
        return this
      default:    
    }
    return this
  }

  catch (rejectedCb) {
    switch(this.state){
      case 'rejected':
        rejectedCb(this.error)
        return this
      default:
    }
    return this  
  }

  finally (finallyCb) {
    finallyCb(this.value, this.error)
  }
}

// test
const pro1 = new Promise((resolve, rejected)=>{
  // resolve(1)
  rejected(2)
}).then(value => {
  console.log('resolve:' + value)
}, error => {
  console.log('rejected' + error)
}).catch(error => {
  console.log('rejected' + error)
}).finally((value, error) => {
  console.log('resolve:' + value)
  console.log('resolve:' + error)
})