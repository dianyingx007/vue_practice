<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-html='title'></h1>
    <h2>{{title2}}</h2>
    <input v-model='newItem' v-on:keyup.enter='addItem'>
    <ul>
      <li v-for='Item in Items' v-on:click='changeFinished(Item)'>
        <p v-bind:class='[bold,{finished:Item.isFinished}]'>{{Item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '<span>?</span>this is a todolist',
      title2: '<p>todo:</p>',
      newItem: '',
      Items: [{
        name: 'apple',
        isFinished: false
      },
      {
        name: 'banana',
        isFinished: true
      }],
      bold: 'bold700'
    }
  },
  methods: {
    addItem: function () {
      this.Items.push({
        name: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    changeFinished: function (Item) {
      Item.isFinished = !Item.isFinished
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished {
  color: red;
}
.bold700 {
  font-weight: bold;
}
</style>
