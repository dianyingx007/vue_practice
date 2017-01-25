const STORAFE_KEY = 'todos-value'

export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAFE_KEY) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAFE_KEY, JSON.stringify(items))
  }
}
