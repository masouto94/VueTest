<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
            @btn-toggle="$emit('btn-toggle')" 
            :text="toggled ? 'Cerrar' : 'Agregar evento'"
            :color="toggled ? 'orange' : 'green'"/>
        
    </header>
</template>

<script>
import Button from './Button.vue'
export default{
    name:"Header",
    props: {
        title: {
            type: String,
            default: 'Empty'
        },
        toggled:{
            type: Boolean
        }
    },
    components:{
        Button
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>