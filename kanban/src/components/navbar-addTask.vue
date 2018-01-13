<template lang="html">
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-navbar-brand href="#">Realtime-Kanban!</b-navbar-brand>
      <b-nav-item href="#" active>Home</b-nav-item>
      <b-nav-item v-b-modal.modalPrevent>Add task</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
    <div class="mt-3 mb-3">
      <br>
    </div>
    <!-- Modal Component -->
    <b-modal id="modalPrevent" ref="modal" title="Add Task!" @ok="handleOk" @shown="clearTask">
      <form @submit.stop.prevent="addTask">
        <b-form-input type="text" placeholder="title"v-model="task.title"></b-form-input>
        <br>
        <b-form-input type="text" placeholder="desc"v-model="task.desc"></b-form-input>
        <br>
        <b-form-input type="text" placeholder="point"v-model="task.point"></b-form-input>
        <br>
        <b-form-select v-model="task.assignedTo" :options="options" class="mb-3">
        </b-form-select>
      </form>
    </b-modal>

  </div>
</template>

<script>
import db from '../../firebase'
export default {
  data () {
    return {
      task: {
        title: '',
        desc: '',
        point: '',
        assignedTo: ''
      },
      options: [
        { value: 'on-hold', text: 'On Hold' },
        { value: 'in-progress', text: 'In Progress' }
      ]
    }
  },
  methods: {
    clearTask () {
      this.task = {}
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.task) {
        alert('Please enter new task')
      } else {
        this.addTask()
      }
    },
    addTask () {
      const newTask = {
        title: this.task.title,
        desc: this.task.desc,
        point: this.task.point,
        assignedTo: this.task.assignedTo
      }
      if (this.task.assignedTo == 'on-hold') {
        db.ref('/on-hold').push(newTask)

      }else {
        db.ref('/in-progress').push(newTask)

      }
      this.clearTask()
      this.$refs.modal.hide()
    }
  }
}

</script>

<style scoped="" lang="css">
h1 {
  font-weight: normal;
}
</style>
