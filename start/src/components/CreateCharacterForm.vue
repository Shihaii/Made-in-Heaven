<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { Character } from '@/types';
import { inject } from 'vue'; 
import {createCharacter, getCharacters, updateCharacter} from '../controllers/CharacterController'

// defineProps<{
//   state: boolean
// }>()
console.log("here")
var popup = ref(false);
// const axios: any = inject('axios') ;

const changeState = () => {
    console.log(popup)
    if(popup.value==true)popup.value=false;
    else popup.value = true;
    console.log(popup)
}

const character : Character = {
  id:'',
  name:'',
  img: null,
  description:'',
  ability:'',
  host:'',
  show:false
}
const imageName : Ref<string> = ref('');



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
 const imageUpload = async (e:HTMLInputEvent) => {
  if(e.target){
    var files = e.target.files;
    if(files){
      if (!files.length) return;
      imageName.value = files[0].name;
      character.img = await files[0];
      console.log("character.img ",character.img)
    }
  }
  
}
const  create = async () => {
  //createCharacter(character);
  updateCharacter("6609c84f6236de113cf59fc9",character);
  console.log("create",character)
  changeState();
}

</script>

<template>
<div ><input class="container" type="button" value="Create" @click="changeState()"></div>
<div v-show="popup==true" class="popup-background"> 
  <div  class="popup space  ">
    <form action="" method="post">
        <h1>Create a new character</h1>
        <label for="name">Name</label>
        <input id="name" v-model="character.name" class="input-field" type="text">
        <label>Image</label>
        <div class="button-container">
          <label for="img" id="img-label" class="input-field">Select image</label>
           <p>{{ imageName }}</p>
        </div>
        
          <input id="img" v-on:change="imageUpload" class="input-field" type="file" accept="image/*">
      
        <label for="description">Description</label>
        <textarea id="description" v-model="character.description" class="input-field" type="text" style="height: 10vh;"></textarea>
        <label for="ability">Ability</label>
        <input id="ability" v-model="character.ability" class="input-field" type="text">
        <label for="host">Host</label>
        <input id="host" v-model="character.host" class="input-field" type="text">
        <label for="publicate">Publicate <input id="publicate" v-model="character.show" class="input-field" type="checkbox"></label>
        <div class="button-container">
        <input class="container" type="button" value="Create" @click="create()">
        <input class="container" type="button" value="Cancel" @click="changeState()">
        </div>
       
      </form>
</div>
</div>

</template>

<style scoped>
.popup{
    position:fixed;
    top: 5vh;
    left: 30vw;
    width: 40vw;
    min-height: 40vh;
    max-height: 90vh;
    padding: 3vh;
    background-color: rgba(160, 160, 160, 0.099);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--primary-text-color);
    border: 5px solid rgba(160, 160, 160, 0.39);
  
}
.popup-background{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.175);
  backdrop-filter: blur(5px) ;
}
.container {
  border: 5px solid rgba(160, 160, 160, 0.39);
  background-color: rgba(160, 160, 160, 0.099);
  border-radius: 15px;
  min-height: 5vh;
  display: flex;
  padding: 1vh;
  text-align: center;
  justify-content: center;
  color: var(--primary-text-color);
}
.input-field{
  background-color: rgba(160, 160, 160, 0.099);
  color: var(--primary-text-color);
  border-radius: 10px;
  border: 4px rgba(160, 160, 160, 0.099) solid;
  padding: 5px;
  /* padding-left: 5px; */
  margin-bottom: 1.5vh;
}
label{
  align-self:flex-start;
}
.popup form{
  display: flex;
  flex-direction: column;

}
.container:hover{
  /* border: 1px solid whitesmoke; */
 background-color: rgba(156, 35, 35, 0.151);;
}
.button-container{
  display: flex;
  flex-direction: row;
  gap: 4vw;
  align-items: center;
}
.character-img{
  display: none;
}
.character-img-label{
  display: block;
  cursor: pointer;
  border: 4px rgba(160, 160, 160, 0.099) solid;
  padding: 7px;
}
@media (max-width: 1127px) {
  .popup{
    left: 20vw;
    width: 60vw;
    font-size: 85%;
  }
}
@media (max-width: 500px) {
  .popup{
    left: 5vw;
    width: 90vw;
    font-size: 70%;
  }
}
</style>@/CharacterController