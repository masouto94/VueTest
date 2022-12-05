<template>
    <div v-show="showAddTask">
        <AddTask @add-task="addTask"/>
      </div>
      <Tasks 
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"/>
    <Footer to="/alt"/>
    
    
</template>

<script>
import Tasks from "../components/Tasks.vue"
import AddTask from "../components/AddTask.vue"
import Footer from "../components/Footer.vue"

export default{
    name: 'Home',
    props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
    Footer
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods:{
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