const STORAGE_KEY = 'todo_items'

export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
  },
  store (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
