<template>
  <div id="componentA">
    <p>{{msg}}</p>
    <p>{{msgfromfather}}</p>
    <button v-on:click='myclick'>click me</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'this is componentA'
      }
    },
    props: ['msgfromfather'],
    methods: {
      myclick () {
        console.log(this.msgfromfather)
      }
    }
  }
</script>
<style>
    #componentA p {
        color: green;
        margin-left: auto;
        margin-right: auto;
    }
    #componentA button {
        margin-left: auto;
        margin-right: auto;
    }
</style>