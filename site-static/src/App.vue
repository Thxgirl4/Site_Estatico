<template>
  <div id="app">
    
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      In finibus magna eros, ut hendrerit tortor aliquam eu. 
      Morbi libero augue, ornare ac mauris vel, lobortis malesuada justo. Sed blandit est id tincidunt sollicitudin. 
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit interdum nunc, in pharetra augue sodales sed. Sed tellus lectus, consequat vel venenatis et, euismod at orci. 
      Aliquam faucibus ligula sed justo gravida imperdiet. 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
input {
  padding: 10px;
  width: 80%;
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>