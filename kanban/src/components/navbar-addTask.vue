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
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>
    <!-- Modal Component -->
    <b-modal id="modalPrevent" ref="modal" title="Add Task!" @ok="handleOk" @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
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
export default {
  data () {
    return {
      task: {
        title: '',
        desc: '',
        point: '',
        assignedTo: ''
      },
      names: [],
      options: [
        { value: 'on-hold', text: 'On Hold' },
        { value: 'in-progress', text: 'In Progress' }
      ]
    }
  },
  methods: {
    clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal.hide()
    }
  }
}

</script>

<style lang="css">
</style>
