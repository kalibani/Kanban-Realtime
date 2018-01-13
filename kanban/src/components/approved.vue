<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-header">
        Approved
      </div>
      <br>
      <div class="card-block">
        <h4 class="card-title">title</h4>
        <h4 class="card-title">point</h4>
        <p class="card-text">desc</p>
          <button type="button" class="btn-sm btn-danger">Remove</button>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
export default {
  props:['kanban']
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
