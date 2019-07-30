class EventEmitter {
  constructor () {
    // 事件存储
    this.envets = this.envets || new Map()
  }
  // 监听事件
  addListener (type, fn) {
    if(!this.envets.get(type)){
      this.envets.set(type, fn)
    }
  }

  // 触发事件
  emit (type, message) {
    let handle = this.envets.get(type)
    handle(message)
    // console.log(arguments)
    // console.log([...arguments])
    // console.log([...arguments].splice(1, arguments.length - 1))
    // handle.apply(this, [...arguments].splice(1, arguments.length - 1))
  }
}

// 测试
let emitter = new EventEmitter()
// 监听事件
emitter.addListener('ages', (message) => {
  console.log(message)
})
// 触发事件
emitter.emit('ages', {as: 1, dsa:1})  // 18