<template>
    <button class="btn" :style="{background: color}" @click="onClick()">
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
            this.$emit('btn-toggle')
        }
    }
}
</script>

<style>
.btn{
    display: inline-block;
    background-color: black;
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