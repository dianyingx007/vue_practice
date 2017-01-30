<template>
  <div id="app">
    <img src="./assets/logo.png" alt="vue图片">
    <h2 v-html='ask'></h2>
    <input class="addnew" v-model='newItem' @keyup.enter='addNewItem'/>
    <ol>
      <li v-for='(item, index) in items' :class='{finished:item.isFinished}'>
        <input class="finishedInput" type="checkbox" :value='item.name' v-model='item.isFinished'>
        <span @click='changeFinished(item)'>{{item.name}}</span>
        <img class="delete" src="./assets/delete.png" @click='deleteItem(index)'>
      </li>
    </ol>
  </div>
</template>
<script>
  import store from './store'
  export default {
    name: 'app',
    data () {
      return {
        ask: 'what do you want to do ?',
        items: store.fetch(),
        newItem: ''
      }
    },
    methods: {
      addNewItem () {
        if (this.newItem) {
          this.items.push({name: this.newItem, isFinished: false})
          this.newItem = ''
        }
      },
      changeFinished (item) {
        item.isFinished = !item.isFinished
      },
      deleteItem (index) {
        this.items.splice(index, 1)
      }
    },
    watch: {
      items: {
        handler (val, oldVal) {
          store.store(val)
        },
        deep: true
      }
    }
  }
</script>
<style>
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  margin-top: 60px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
}
.addnew {
  width: 300px;
  height: 30px;
  border:2px solid #41B883;
  display: block;
  margin: 20px auto 20px auto;
  font-size: 20px;
}
#app ol {
  line-height: 35px;
  margin: 0 auto;
  width: 300px;
}
#app li {
  height: 35px;
  position: relative;
  width: 280px;
  margin-left: 20px;
  font-weight: bold;
}
.finished {
  text-decoration: line-through;
  color: #ee3333;
}
.delete {
  float: right;
  width: 15px;
  height: 15px;
  margin-top: 10px;
}
.finishedInput {
  width: 19px;
  height: 19px;
  position: absolute;
  left: 0;
  top: 8px;
  cursor: pointer;
}
.finishedInput ~ span {
  cursor: pointer;
}
</style>