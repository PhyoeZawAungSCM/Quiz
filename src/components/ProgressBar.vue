<template>
  <div class="container">
 <div class="progress-container">
    <div class="progress-status" ref="progressStatus">
    </div>
 </div>
 <span class="percentageStauts">{{ percentageStatus.number.toFixed(0) }}%</span>
</div>
</template>
<script setup>
import {watch,ref,reactive} from 'vue';
import gsap from 'gsap';
const props = defineProps({
  percentage:Number
})
const progressStatus = ref(null);
const percentageStatus = reactive({number:0});
watch(()=>props.percentage,(p)=>{
  console.log("Prop change",p);
  gsap.to(progressStatus.value,{
    duration:1,
    width:`${p}%`
  })
  gsap.to(percentageStatus,{
    duration:1,
    number:p
  })
})
</script>
<style scoped>
.container{
  display: flex;
  align-items: center;
}
 .progress-container{
  background-color: rgb(240, 230, 230);
  width:500px;
  height: 5px;

  
 }
 .progress-status{
  background-color: rgb(241, 58, 104);
  height: 5px;
  width:0px;
 }
 .percentageStauts{
  font-weight: bolder;
  font-size: 18px;
  padding-left: 10px;
 }
</style>