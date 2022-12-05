<template>
    <div class="container">
    <h1>
       Contenido alternativo 
    </h1>
</div>
    <Footer to="/home"/>
</template>

<script>
import Footer from '../components/Footer.vue'

export default{
    name:'Alt',
    components:{
        Footer
    }
    
}
</script>

<style scoped>
.container{
    border-style: none;
}
</style>