<template>
  <div class="container">
    
    <Header 
      @btn-toggle="toggleForm"
      title="Mis eventos"
      :toggled="showAddTask"/>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <Tasks 
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods:{
    deleteTask(id){
      if(confirm("Borrar evento?")){
      this.tasks = this.tasks.filter((task)=> task.id !== id)
    }
  },
  toggleReminder(id){
    this.tasks.map((task) => {
      if(task.id === id){
        task.reminder = task.reminder ? false : true
      }
    })
  },
  addTask(task){
    this.tasks = [...this.tasks, task]
  },
  toggleForm(){
    this.showAddTask = !this.showAddTask
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
