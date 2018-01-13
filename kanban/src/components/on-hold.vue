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
          <button type="button" class="btn-sm btn-primary" v-b-modal.modalPrevent2 @click="getTask(task)">Edit</button>
          <button type="button" class="btn-sm btn-danger" @click="remove(task)">Remove</button>
          <button type="button" class="btn-sm btn-success" @click="remove(task)">Next</button>
      </div>
      <br>
    </div>

    <b-modal id="modalPrevent2" ref="modal" title="Edit Task!" @ok="handleOk" @shown="clearTask">
      <form @submit.stop.prevent="editTask">
        <b-form-input type="text" placeholder="title"v-model="tasks.title"></b-form-input>
        <br>
        <b-form-input type="text" placeholder="desc"v-model="tasks.desc"></b-form-input>
        <br>
        <b-form-input type="text" placeholder="point"v-model="tasks.point"></b-form-input>
        <br>
      </form>
    </b-modal>
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
    clearTask () {
      this.tasks = {}
    },
    getTask(task){
      this.tasks.title = task.title
      this.tasks.point = task.desc
      this.tasks.desc = task.point
      this.tasks.key = task['.key']
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.tasks) {
        alert('Please enter task')
      } else {
        this.editTask()
      }
    },
    remove(task){
      db.ref('/on-hold').child(task['.key']).remove()
    },
    editTask(){
      const newTask = {
        title: this.tasks.title,
        point: this.tasks.point,
        desc: this.tasks.desc
      }
      db.ref(`/on-hold/${this.tasks.key}`).set(newTask)
      this.clearTask()
      this.$refs.modal.hide()
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
