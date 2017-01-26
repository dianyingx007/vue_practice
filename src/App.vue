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
    <div>子组件返回的内容：</div>
    <p>{{msgfromchild}}</p>
    <div>以下是子组件：</div>
    <component-a v-bind:msgfromfather='fromfather' v-on:showmsgfromchild='getmsgfromchild'></component-a>
  </div>
</template>

<script>
import Store from './store'
import componentA from './components/componentA'
export default {
  name: 'app',
  data () {
    return {
      title: '<span>?</span>this is a todolist',
      title2: '<p>todo:</p>',
      newItem: '',
      Items: Store.fetch(),
      bold: 'bold700',
      fromfather: 'you are my son',
      msgfromchild: ''
    }
  },
  methods: {
    addItem: function () {
      if (this.newItem !== '') {
        this.Items.push({
          name: this.newItem,
          isFinished: false
        })
        this.newItem = ''
      }
    },
    changeFinished: function (Item) {
      Item.isFinished = !Item.isFinished
    },
    getmsgfromchild (msg) {
      this.msgfromchild = msg
    }
  },
  watch: {
    Items: {
      handler (val, oldVal) {
        Store.save(val)
      },
      deep: true
    }
  },
  components: {componentA}
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
