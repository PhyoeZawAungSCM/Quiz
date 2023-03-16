<script setup>
import { RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';
const data = reactive({
  person: {
    name: "Mg mg"
  }
});

onMounted(() => {
  console.log("person in data", data.person);
  const newPerson = { name: "haha" };
  data.person = newPerson;
  console.log(data.person === newPerson)
})
</script>
<template>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>
<style scoped>
.container {
  max-width: 800px;
  align-items: center;
  margin: 0 auto;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>