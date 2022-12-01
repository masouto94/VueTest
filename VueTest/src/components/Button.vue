<template>
    <button :style="{background: color}" @click="onClick()">
        {{text}}
    </button>
</template>

<script>
export default{
    name: "Button",
    props:{
        text: {
            type:String
        },
        color:{
            type: String,
            default: "black"
        }
    },
    methods:{
        onClick(){
            console.log("Hola")
        }
    }
}
</script>

<style scoped>
button{
    display: inline-block;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}
</style>