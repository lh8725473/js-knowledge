// 思路：在规定时间内只触发一次
function throttle (fn, delay) {
  let prev = Date.now()
  return function () {
    let context = this
    let arg = arguments
    let now = Date.now()
    if (now - prev >= delay) {
      fn.apply(context, arg)
      prev = Date.now()
    }
  } 
}

// test
function fn () {
  console.log('节流')
}
document.addEventListener('scroll', debounce(fn, 1000)) 