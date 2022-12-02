<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Evento</label>
            <input 
            type="text" 
            name="text" 
            placeholder="Agregar evento"
            v-model="text" />
        </div>
        <div class="form-control">
            <label>Fecha y hora</label>
            <input 
            type="date"
            name="day" 
            placeholder="Agregar fecha y hora"
            v-model="day" />
        </div>
        <div class="form-control form-control-check">
            <label>Recordatorio</label>
            <input 
            type="checkbox" 
            name="reminder"
            v-model="reminder" />
        </div>
        <input class="btn" type="submit" value="Guardar evento" />
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text:'',
            day:'',
            reminder: false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert("No se puede guardar un evento vacío")
                return
            }
            const newTask = {
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }
            this.$emit("add-task", newTask)
            this.text = '',
            this.day = '',
            this.reminder = false
        }
    }
}
</script>

<style scoped>
.btn {
    background-color: red;
}

.form-control {
    padding: 5px;
}

.form-control>label {
    margin-right: 5px;
}
</style>