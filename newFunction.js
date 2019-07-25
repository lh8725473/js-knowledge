// new 关键字的
function newF (fun) {
  return function () {
    // 创建一个空对象
    let obj = {}
    // 隐式原型指向构造函数原型
    obj.__proto__ = fun.prototype
    // 执行构造函数
    fun.apply(obj, arguments)
    // 返回该对象
    return obj
  }
}


// test
function person (name, age) {
  this.name = name
  this.age = age
}

let obj = newF(person)('liiki', 20)

console.log(obj)