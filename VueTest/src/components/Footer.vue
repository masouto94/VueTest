<template>
    <div>
    <footer>
        <router-link :to="to">{{to.replace("/","").toUpperCase()}}</router-link>
        <div>
        Derechos reservados
    </div>
    </footer>
</div>
</template>

<script>

export default{
    name:'Footer',
    props:{
        to:{
            type:String,
            default:""
        }
    }

}
</script>
<style scoped>
footer{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 10%;

}
</style>