<script setup>
import QuestionTypeCard from '../components/QuestionTypeCard.vue';
import quiz from '../JSON/quiz';
import { ref } from 'vue';
const quizes = ref(undefined);
quizes.value = quiz;
</script>
<template>
  <div>
    <h2>Quiz Game</h2>
    <div class="question-container">
      <TransitionGroup name="list" appear>
        <QuestionTypeCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      </TransitionGroup>
    </div>
  </div>
</template>
<style scope>
.question-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>