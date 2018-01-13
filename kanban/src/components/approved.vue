<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header">
        Approved
      </div>
      <div class="card-block" v-for="task in kanban">
        <br>
        <h4 class="card-title">{{task.title}}</h4>
        <h4 class="card-title">{{task.point}}</h4>
        <p class="card-text">{{task.desc}}</p>
          <button type="button" class="btn-sm btn-danger" @click="remove(task)">Remove</button>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
import db from '../../firebase'
export default {
  props:['kanban'],
  methods:{
    remove(task){
      db.ref('/approved').child(task['.key']).remove()
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
  background-color: #2ccc84;
}
</style>
