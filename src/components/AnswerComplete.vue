<script setup>
import { useRouter } from 'vue-router';
  const props = defineProps({
    rightAnswerCount:Number,
    totalQuestion:Number,
  })
  const router = useRouter();
  function goHome(){
    router.push('/');
  }
</script>
<template>

    <div class="answer-container">
      <h2>You correct {{ rightAnswerCount }} questions in total of {{ totalQuestion }} questions</h2>
      <button @click="goHome">Go back</button>
    </div>

</template>
<style scoped>

</style>