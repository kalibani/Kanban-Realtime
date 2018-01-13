<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header">
        Needs Review
      </div>
      <br>
      <div class="card-block" v-for="task in kanban">
        <br>
        <h4 class="card-title">{{task.title}}</h4>
        <h4 class="card-title">{{task.point}}</h4>
        <p class="card-text">{{task.desc}}</p>
          <button type="button" v-b-modal.modalPreventt class="btn-sm btn-warning" @click="back(task)">Back</button>
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
      db.ref('/needs-review').child(task['.key']).remove()
    },
    next(task){
      const newTask = {
        title: task.title,
        point: task.point,
        desc: task.desc
      }
      db.ref('/approved').push(newTask)
      this.remove(task)
    },
    back(task){
      let newTask = {
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
  background-color: #007bff;
}
</style>
