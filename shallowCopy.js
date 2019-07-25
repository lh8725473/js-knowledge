// 浅拷贝
function shallowCopy (obj) {
  // Object.assign
  return Object.assign({}, obj)
  // ES6 扩张符号
  // return {...obj}
}


// test
let sourceObj = {a: 1, b: 212}
let tagObj = {}

tagObj = shallowCopy(sourceObj)

console.log(tagObj)