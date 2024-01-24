<script setup lang="ts">
import { computed, mergeProps, ref } from 'vue'
import Vue from 'vue';



defineProps<{
  image_src: string;
  header: string;
  text: string;
  direction : boolean;
}>()


const getDirection = (direction : boolean) => {
  console.log(direction)
  if(direction){
    return ""
  }
  else{
    const o = ref("flex-reverse-row-direction")
    return "flex-reverse-row-direction"
  }
}
const getHeaderDirection = (direction : boolean) => {
  console.log(direction)
  if(!direction){
    return "text-align-right"
  }
}
const getImageSrc = (image_src : string) => {
  try {
    const imageUrl = new URL(`${image_src}`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
}
</script>
<template style="z-index=6">
  <div :class="'containerr ' +  getDirection(direction)" >
    <div class="character-image soar">
        <img :src="getImageSrc(image_src)" alt="" />
    </div>
    <div class="text-container">
      <div :class="'header-text-container ' + getHeaderDirection(direction)">
        <h1>{{ header }}</h1>
      </div>
      <div class="casual-text-container">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/made-in-heaven.css">

</style>
