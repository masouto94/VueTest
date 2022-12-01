<template>
  <div class="container">
    
    <Header title="Task Tracker"/>
    <Tasks @delete-task="deleteTask" :tasks="tasks"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  methods:{
    deleteTask(id){
      if(confirm("Borrar evento?")){
      this.tasks = this.tasks.filter((task)=> task.id !== id)
    }
  }
  },
  created() {
    this.tasks = [{
      id:1,
      text: 'Primer tarea',
      day: 'Domingo',
      reminder: true
    },
    {
      id:2,
      text: 'Segunda tarea',
      day: 'Lunes',
      reminder: true
    },
    {
      id:3,
      text: 'Tercera tarea',
      day: 'Miércoles',
      reminder: false
    },
  ]
  }
}
</script>
<style scoped>
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border:1px solid steelblue;
  padding: 30px;
  border-radius: 5px
}
</style>
