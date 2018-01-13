<template lang="html">
  <div class="">
    <h1>Realtime-Kanban Application</h1>
    <appNavbar></appNavbar>
    <div class="row">
      <div class="col-md-3">
        <appOnHold :kanban="onHold"></appOnhold>
      </div>
      <div class="col-md-3">
        <appInProgress :kanban="inProgress"></appInProgress>
      </div>
      <div class="col-md-3">
        <appNeedsReview :kanban="needsReview"></appNeedsReview>
      </div>
      <div class="col-md-3">
        <appApproved :kanban="approved"></appApproved>
      </div>
    </div>
  </div>
</template>

<script>
import navbaraddTask from './navbar-addTask'
import onHold from './on-hold'
import inProgress from './in-progress'
import needsReview from './needs-review'
import approved from './approved'
import db from '../../firebase'
export default {
  components: {
    appNavbar: navbaraddTask,
    appOnHold: onHold,
    appInProgress: inProgress,
    appNeedsReview: needsReview,
    appApproved: approved
  },
  data () {
    return {

    }
  },

  firebase: {
    onHold: db.ref('/on-hold'),
    inProgress: db.ref('/in-progress'),
    needsReview: db.ref('/needs-review'),
    approved: db.ref('/approved')
  }
}
</script>

<style scoped="" lang="css">
h1 {
    text-align: center;
  }

.row {
  margin-bottom: 20px;
}
</style>
