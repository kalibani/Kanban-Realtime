<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header">
        In-Progress
      </div>
      <div class="card-block" v-for="task in kanban">
        <br>
        <h4 class="card-title">{{task.title}}</h4>
        <h4 class="card-title">{{task.point}}</h4>
        <p class="card-text">{{task.desc}}</p>
          <button type="button" class="btn-sm btn-warning" @click="back(task)">Back</button>
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
  methods: {
    remove(task){
      db.ref('/in-progress').child(task['.key']).remove()
    },
    next(task){
      const newTask = {
        title: task.title,
        point: task.point,
        desc: task.desc
      }
      db.ref('/needs-review').push(newTask)
      this.remove(task)
    },
    back(task){
      const newTask = {
        title: task.title,
        point: task.point,
        desc: task.desc
      }
      db.ref('/on-hold').push(newTask)
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
  background-color: #fd7e14;
}
</style>
