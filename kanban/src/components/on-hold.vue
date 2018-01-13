<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header">
        On-Hold
      </div>
      <div class="card-block" v-for="task in kanban">
        <br>
        <h4 class="card-title">{{task.title}}</h4>
        <h4 class="card-title">{{task.point}}</h4>
        <p class="card-text">{{task.desc}}</p>
          <button type="button" class="btn-sm btn-danger" @click="remove(task)">Remove</button>
          <button type="button" class="btn-sm btn-success" @click="next(task)">Next</button>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
import db from '../../firebase'
export default {
  props:['kanban'],
  data () {
    return {
      tasks : {
        key: '',
        title : '',
        point: '',
        desc: ''
      }
    }
  },
  methods: {
    remove(task){
      db.ref('/on-hold').child(task['.key']).remove()
    },
    next(task){
      const newTask = {
        title: task.title,
        point: task.point,
        desc: task.desc
      }
      db.ref('/in-progress').push(newTask)
      this.remove(task)
    }
  }
}
</script>

<style scoped="" lang="css">
.card-block {
  display: inline-block;
  margin-left: 10px;
}
.card-header {
  background-color: #dc3545;
}
</style>
