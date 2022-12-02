<template>
    <div @dblclick="onToggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}
            <i class="fas fa-times" @click="onDelete(task.id)"></i>
        </h3>
        <p>{{this.parseDate(task.day)}}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: {
            type: Object
        }
    },
    methods:{
        onDelete(id){
            this.$emit('delete-task', id)
        },
        onToggleReminder(id){
            this.$emit('toggle-reminder', id)
        },
        parseDate(date){
            const raw = date.split('-')
            const year = raw[0]
            const month = parseInt(raw[1]) - 1
            const day = raw[2]
            const toParse = new Date(year,month,day)
            return toParse.toDateString()
        }
    }
}
</script>

<style scoped>
.fas{
    color: red
}
.task{
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    user-select: contain;
    cursor:pointer;
}

.task.reminder{
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
</style>