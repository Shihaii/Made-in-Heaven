<script setup lang="ts">
import { mergeProps, ref, type Ref } from 'vue';
import type { Character } from '@/types';
import { inject } from 'vue'; 
import {createCharacter, getCharacters, updateCharacter, updateCharacterWithoutImg} from '../controllers/CharacterController'

const props = defineProps<{
  character: Character
}>()
console.log("here")
var popup = ref(false);
var imageChanged=false;
// const axios: any = inject('axios') ;

const changeState = () => {
    console.log(popup)
    if(popup.value==true)popup.value=false;
    else popup.value = true;
    console.log(popup)
}

// const character : Character = props.character;
//  character.name = props.character.name;

const character : Character = {
  name : props.character.name,
  id : props.character.id,
  description : props.character.description,
  host : props.character.host,
  ability : props.character.ability,
  img : props.character.img,
  show: props.character.show
}


const imageName : Ref<string> = ref('');



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
 const imageUpload = async (e:HTMLInputEvent) => {
  imageChanged=true;
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
const edit = async () => {
  console.log("edit",character.img)
  // if(!imageChanged){
  // updateCharacterWithoutImg(character.id,character);
  // }
  // else{
  //   updateCharacter(character.id,character);
  // }
  
  updateCharacter(character.id,character);
  changeState();
}

</script>

<template>
<div ><input class="container" type="button" value="Edit" @click="changeState()"></div>
<div v-show="popup==true" class="popup-background"> 
  <div  class="popup space  ">
    <form action="" method="post">
        <h1>Create a new character</h1>
        <label for="name">Name</label>
        <input id="name" v-model="character.name" class="input-field" type="text">
        <label>Image</label>
        <div class="button-container">
          <label for="img{{ character.id }}" class="character-img-label input-field">Select image</label>
           <p>{{ imageName }}</p>
        </div>
        
          <input id="img{{ character.id }}" v-on:change="imageUpload" class="character-img input-field" type="file" accept="image/*">
      
        <label for="description">Description</label>
        <textarea id="description" v-model="character.description" class="input-field" type="text" style="height: 10vh;"></textarea>
        <label for="ability">Ability</label>
        <input id="ability" v-model="character.ability" class="input-field" type="text">
        <label for="host">Host</label>
        <input id="host" v-model="character.host" class="input-field" type="text">
        <label for="publicate">Publicate <input id="publicate" v-model="character.show" class="input-field" type="checkbox"></label>
        <div class="button-container">
        <input class="container" type="button" value="Create" @click="edit()">
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
    max-height: 95vh;
    min-height: 40vh;
    padding: 3vh;
    background-color: rgba(160, 160, 160, 0.099);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--primary-text-color);
    border: 5px solid rgba(160, 160, 160, 0.39);
   font-size: 90%;
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
.input-field::-webkit-scrollbar {
    display: none;
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