const COOKIE_KEY = 'username'
/* escape unescape 编码和解码函数 */

export default {
  setCookie (name, value, expiredays) {
    var exdata = new Date()
    exdata.setDate(exdata.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdata.toGMTString())
  },
  getCookie (name) {
    if (document.cookie.length > 0) {
      var start = document.cookie.indexOf(name + '=')
      if (start !== -1) {
        start += name.length + 1
        var end = document.cookie.indexOf(';', start)
        if (end === -1) end = document.cookie.length // 不存在';'时，取后面全部
        return unescape(document.cookie.slice(start, end))
      }
    }
    return ''
  },
  checkCookie () {
    var value = this.getCookie(COOKIE_KEY)
    if (value != null && value !== '') {
      console.log(COOKIE_KEY + 'is' + value)
    } else {
      value = window.prompt('Please enter ' + COOKIE_KEY + ':', '')
      if (value != null && value !== '') {
        this.setCookie(COOKIE_KEY, value, 30)
      }
    }
  }
}
