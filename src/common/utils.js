
// 防抖函数,解决重复频繁调用问题
export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

