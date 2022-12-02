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
  methods: {
    toggleForm(){
      this.showAddTask = !this.showAddTask
    },
    async addTask(task) {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Estás seguro de que querés borrar el evento?')) {
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'DELETE',
        })
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      const data = await res.json()
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async fetchTasks() {
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:3000/tasks/${id}`)
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.tasks = await this.fetchTasks()
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
