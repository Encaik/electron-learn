<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex justify-content-start align-items-center">
      <div class="pr-1 pl-1">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="pr-1 pl-1">
        <i class="fa fa-undo" aria-hidden="true"></i>
      </div>
      <div class="input-group pr-1 pl-1">
        <input type="text" class="form-control" placeholder="Search">
        <div class="input-group-append">
          <button class="btn btn-success" type="submit">Go</button>  
        </div>
      </div>
    </div>
    <div class="btn-group m-2">
      <button type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-window-restore" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <span>|</span>
      <button @click="minbtn" type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-minus" aria-hidden="true"></i>
      </button>
      <button @click="maxbtn" type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-window-restore" aria-hidden="true"></i>
      </button>
      <button @click="clsbtn" type="button" class="btn pt-0 pb-0 pl-2 pr-2">
          <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
const {ipcRenderer: ipc} = require('electron');
export default {
  methods: {
    maxbtn: function () {
      ipc.send('window-max');
    },
    minbtn: function () {
      ipc.send('window-min');
    },
    clsbtn: function () {
      ipc.send('window-close');
    }
  },
}
</script>

<style scoped>

</style>
