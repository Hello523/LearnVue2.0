<template>
  <div id="app">
    <h1>你好ss</h1>
    <router-view :todos="todos"></router-view>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'app',
  data(){
    return{
      todos:[
        {id:1,title:'Learn Vue.js',isCompleted:false}
      ]
    }
  },
  mounted:function(){
        console.log(">>>>>>>>>>")
        Axios.get("http://g.cn")
          .then(function (rsp) {
            console.log(rsp,"LLLLLLLLLLL");
        })
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
