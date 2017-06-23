<template>
  <div id="app">
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      todos:[
        {id:1,title:'Learn Vue.js',isCompleted:false}
      ]
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
</style>
