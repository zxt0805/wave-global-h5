export function isIos() {
  let ua = navigator.userAgent.toLocaleLowerCase()
  let u = navigator.userAgent
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return isIOS
}

export function isAndroid() {
  let ua = navigator.userAgent.toLocaleLowerCase()
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  return isAndroid
}
