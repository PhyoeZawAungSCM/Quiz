<script setup>
import { watch,ref } from 'vue';
const props = defineProps({
  width: Number
})
</script>
<template>
  <div class="progress-container">
      <div class="progress-status">
    </div>
  </div>
</template>
<style scoped>
.progress-container {
  width: 200px;
  border: 1px solid grey;
  border-radius: 20px;
  display: flex;
}

.progress-status {
  background-color: rgb(58, 91, 240);
  height: 10px;
  border-radius: 20px;
  width: v-bind(width +'%');
}
</style>