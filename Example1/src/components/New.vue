<template>
  <div id="todo">
    <h2>{{todo.title}}</h2>
  </div>
</template>
<script>
export default {
  name: 'todo',
  data(){
    return{
      todo:{id:1,title:'Learn Vuejs2.0'}
    }
  },
  mounted(){
    console.log(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
