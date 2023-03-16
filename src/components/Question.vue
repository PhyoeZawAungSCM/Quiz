<script setup>
const porps = defineProps({
  quiz: Object
})
const emit = defineEmits(['nextQuestion'])

const answer = (right) => {
  emit('nextQuestion', right);
}
</script>
<template>
  <div ref="question" class="question">
  <h3>{{ quiz.question }}</h3>
  <div  class="question-container" @click="answer(choice.right)" v-for="(choice, i) in quiz.choice" :key="i">
    <div class="question-no">
      {{ i }}
    </div>
    <div class="question-label">
      {{ choice.label }}
    </div>
  </div>
  </div>
</template>
<style scoped>
.question{
}
.question-container {
  justify-content: left;
  width: 100%;
  align-items: center;
  cursor: pointer;
}

.question-no {
  padding: 5px 10px;
  font-size: medium;
  font-weight: 400;
  background-color: bisque;
  height: inherit;
}

.question-label {
  width: 80%;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px rgb(240, 232, 232) solid;
  font-size: 16px;
  font-weight: 300;
}
</style>