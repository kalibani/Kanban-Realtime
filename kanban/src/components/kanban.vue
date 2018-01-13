<template lang="html">
  <div class="">
    <h1>Realtime-Kanban Application</h1>
    <appNavbar></appNavbar>
  </div>
</template>

<script>
import navbaraddTask from './navbar-addTask.vue'
export default {
  components: {
    appNavbar: navbaraddTask
  }
}
</script>

<style scoped="" lang="css">
  h1 {
    text-align: center;
    }
</style>
