<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
// defining the props
const props = defineProps({
  quiz: Object,
});
const router = useRouter();

const length = computed(() => props.quiz.questions.length);

const goToQuestionView = () => {
  router.push("/questionview/" + props.quiz.id);
};
</script>
<template>
  <div class="card" @click="goToQuestionView">
    <div class="card-body">
      <div>
        <img class="image" :src="quiz.image" />
      </div>
      <div class="detail">
        <h4>{{ quiz.type }}</h4>
        <p>{{ length }} questions</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  border-radius: 5px;
  border: 1px solid rgb(155, 144, 144);
  width: 200px;
  margin: 0px 10px 20px 10px;
  cursor: pointer;
}

.card-body .detail{
  padding: 5px;
}

.image {
  width: 100%;
  height: 120px;
  border-radius:5px 5px 0px 0px;
}
h4{
  margin:10px;
}
p{
  margin: 10px;
}
</style>
