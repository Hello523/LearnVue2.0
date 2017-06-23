<template>
  <div id="todo">
    <h2>{{todo.title}}</h2>
    <h1>shenme</h1>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data(){
    return{
      todo:{id:1,title:'Learnss Vuejs2.0'}
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
