<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

import quizes from '../JSON/quiz';

import ProgressBar from '../components/ProgressBar.vue';

import Question from '../components/Question.vue';
import AnswerComplete from '../components/AnswerComplete.vue';
const route = useRoute();
// defining the emit 
const emit = defineEmits(['storeAnswerCorrecteness']);
// defining the reactive variable with ref
const id = ref(route.params.id);
const quizId = ref(1);
const rightAnswerCount = ref(0);

const questions = quizes.filter(quiz => quiz.id == id.value);

// method 
function nextQuestion(right) {
  if (right) {
    rightAnswerCount.value++;
  }
  quizId.value++;
}
// computed propertie
const quiz = computed(() => {
  return questions[0].questions.filter(question => question.id == quizId.value)
})

const isQuestionEnd = computed(() => {
  return questions[0].questions.length == quizId.value - 1;
});

const width = computed(() => {
  return ((quizId.value - 1) / questions[0].questions.length) * 100;
})

</script>
<template>
  <div>
    <h2>Quiz Game</h2>
    <div v-if="!isQuestionEnd">
      <ProgressBar :percentage="width"></ProgressBar>
      <Question :quiz="quiz[0]" @nextQuestion="nextQuestion" />
    </div>
    <Transition name="answer">
      <div v-if="isQuestionEnd">
        <AnswerComplete :rightAnswerCount="rightAnswerCount" :totalQuestion="questions[0].questions.length">
        </AnswerComplete>
      </div>
    </Transition>

  </div>
</template>
<style scoped>
.answer-enter-active {
  animation: bounce-in 0.5s;
}

.answer-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>