<script setup lang="ts">
 import { useRouter, useRoute } from 'vue-router'
 import {getCharacterById} from '../controllers/CharacterController'
import type { Character } from '../types';

const route = useRoute()
var character : Character;
const getCharacter = async (characterId:string | string[]) => {
   let cache = getCharacter(route.params.characterId);
   if(typeof cache === "string"){

   }
   else{
     // character = cache
   }
}

</script>



<template>
<h1>Here we are {{ route.params.characterId }}</h1>
</template>


<style scoped>

</style>