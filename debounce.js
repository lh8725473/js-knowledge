// 在规定时间内未触发第二次，则执行
function debounce(fn, delay) {
   // 利用闭包保存定时器
   let timer = null
   // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
   return function () {
     // 保存函数调用时的上下文和参数，传递给 fn
     let context = this
     let arg = arguments

     // 在规定时间内再次触发会先清除定时器后再重设定时器
     clearTimeout(timer)

     // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
     timer = setTimeout(() => {
       fn.apply(context, arg)
     }, delay)
   }
}

// test
function fn () {
  console.log('防抖')
}
document.addEventListener('scroll', debounce(fn, 1000)) 