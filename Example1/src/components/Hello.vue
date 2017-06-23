<template>
  <transition  name="bounce">
  <div id="todo">
    <div class="" id="panel">
      <h4>Welcome Vue.js2.0 Turtorial</h4>
      <div class="" id="p-content">
        <ul>
          <h1>My Todos {{TodoCount}}</h1>
          <li v-for="(todo,index) in todos" :class="{'completed':todo.isCompleted}">
            <router-link :to="{name:'todo',params:{id:todo.id}}">{{todo.title}}</router-link>
            <Button type="warning" size="small" class="btn-del" @click="DeleteTodo(index)">Delete</Button>
            <Button size="small" class="btn-del" :type="[todo.isCompleted?'error':'success']" @click="CompleteTodo(todo)">{{todo.isCompleted?'Cancel':'Complete'}}</Button>
          </li>
        </ul>
        <form>
          <Input type="text" v-model="newTodo.title" placeholder="请输入..."></Input>
          <Button type="success" class="btn" @click="AddTodo(newTodo)">Add Todo</Button>
        </form>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'hello',
  props:['todos'],
  data () {
    return {
      newTodo:{id:null,title:'',isCompleted:false},
    }
  },
  computed:{
    TodoCount(){
      return this.todos.length;
    }
  },
  methods: {
    AddTodo(newTodo){
      this.todos.push(newTodo)
      this.newTodo={id:null,title:''}
    },
    DeleteTodo(index){
      this.todos.splice(index,1);
    },
    CompleteTodo(todo){
      todo.isCompleted=!todo.isCompleted;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
.completed{
  text-decoration: line-through;
  color: #5cb85c;
}
ul{
  padding-bottom: 1px;
}
li{
  line-height: 40px;
  border-bottom: 1px solid #dddee1;

}
.btn{
  margin: 5px 5px;
}
.btn-del{
  margin-right: 5px;
  transform: translateY(35%);
  float: right;
}
#panel{
  border: 1px solid #dddee1;
  text-align: left;
}
#panel>h4{
  background: #f8f8f9;
  padding: 5px 5px;
  border-bottom: 1px solid #dddee1;
}
</style>
