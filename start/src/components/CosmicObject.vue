<script setup lang="ts">
import { computed, mergeProps, ref } from 'vue'
import Vue from 'vue';
// const idws = "w";
defineProps<{
  idw: string;
  image_src: string;
  top: string;
  left2: string;
  right : string;
  bottom: string;
}>()

const a = self.;
const getStyle = (id:string) => {
const element = document.getElementById(id);
if(element)
{
  // // element.style.top = {top} + '';
  // element.style.left = {left2} + '';
  // element.style.right = {right} + '';
  // element.style.bottom = {bottom} + '';


}
}
</script>

<template>
 <div>
    <div :id="idws" :style="getStyle" class="absolute-container rotate">
    <img :src="image_src" alt="">
 </div>
 </div>

</template>

<style scoped>

</style>