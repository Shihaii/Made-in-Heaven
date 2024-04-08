<script setup lang="ts">
import { ref, type Ref } from "vue";
import "@/assets/base.css";
import Loading from "../components/TimeAccelerationAnimation.vue";
import MadeInHeaven from "../components/MadeInHeaven.vue";
import Parallax from "../components/Parallax.vue";
import { getCharacters } from "@/controllers/CharacterController";
import type { Character } from "@/types";

var characters : Ref<Character[]> | Ref = ref();

const fetchCharacters = async () => {
characters.value = await getCharacters();
console.log("characters in DesignManagment ",characters);
}

fetchCharacters();

const getImageSrc = (image_src : ArrayBuffer) => {

    var arrayBufferView = new Uint8Array( image_src );
    var blob = new Blob( [ arrayBufferView ], { type: "image/*" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    console.log("Imageurl",imageUrl)
    return imageUrl;
}
const getDirection = (index : number) => {
if(index % 2 == 0)
return "left";
else return "right"
}
</script>

<template>
 
    <Parallax></Parallax>
    <div class="space" style="z-index: 1000">
      <div v-for = "(character,index) in characters">
        <div v-if = "character.show == true">
        <MadeInHeaven
        :header="character.name"
        :image_src="character.img.data"
        :direction="getDirection(index)"
        :text="character.description"
        ></MadeInHeaven>
        </div>
      </div>
      <Loading></Loading>
    </div>
</template>
