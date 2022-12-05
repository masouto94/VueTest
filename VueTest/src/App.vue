<template>
  <div class="container">
    
    <Header 
      @btn-toggle="toggleForm"
      title="Mis eventos"
      :toggled="showAddTask"/>
    <router-view :showAddTask="showAddTask"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
    }
  }
}
</script>
<style>
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  min-width: 400px;
  border:1px solid steelblue;
  padding: 30px;
  border-radius: 5px
}
</style>
