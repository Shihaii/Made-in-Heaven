<script setup lang="ts">
import { computed, mergeProps, ref } from 'vue'
import Vue from 'vue';



defineProps<{
  image_src: ArrayBuffer;
  header: string;
  text: string;
  direction : string;
}>()


const getDirection = (direction : string) => {
  console.log("direction in MadeInHeaven",direction)
  if(direction=="right"){
    const o = ref("flex-reverse-row-direction");
    return "flex-reverse-row-direction";
  }
  else{
    return "";
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

const getImageSrc2 = (image_src : ArrayBuffer) => {

var arrayBufferView = new Uint8Array( image_src );
var blob = new Blob( [ arrayBufferView ], { type: "image/*" } );
var urlCreator = window.URL || window.webkitURL;
var imageUrl = urlCreator.createObjectURL( blob );
console.log("Imageurl",imageUrl)
return imageUrl;
}
</script>
<template style="z-index=6">
  <div :class="'containerr ' +  getDirection(direction)" >
    <div class="character-image soar">
        <img :src="getImageSrc2(image_src)" alt="" />
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
