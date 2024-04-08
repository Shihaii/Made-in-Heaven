<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { Character } from '@/types';
import { inject } from 'vue'; 
import {createCharacter, deleteCharacter, getCharacters} from '../controllers/CharacterController'

const props = defineProps<{
id : string
}>()
console.log("here")
var popup = ref(false);

const changeState = () => {
    console.log(popup)
    if(popup.value==true)popup.value=false;
    else popup.value = true;
    console.log(popup)
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
const  confirm = async () => {
  deleteCharacter(props.id);
  changeState();
}

</script>

<template>
   <img @click="changeState()" src="../assets/trash_bucket_01.png">
<div v-show="popup==true" class="popup-background"> 
  <div  class="popup space">
    <form>
      <div>
        <h1>Are you sure that you want to delete a character?</h1>
      </div>
        
        <div class="button-container">
        <input class="container" type="button" value="Delete" @click="confirm()">
        <input class="container" type="button" value="Cancel" @click="changeState()">
        </div>
      </form>
</div>
</div>

</template>

<style scoped>
.popup{
    position:fixed;
    display: flex;
    /* flex-direction: column-reverse; */
    top: 30vh;
    left: 30vw;
    width: 40vw;
    /* min-height: 40vh; */
    padding: 3vh;
    background-color: rgba(160, 160, 160, 0.099);
    border-radius: 15px;
    /* align-items: center; */
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
  margin-top: 6vh;
  display: flex;
  flex-direction: row;
  gap: 4vw;
  
  /* align-items:center;
  justify-content: center;
  height: 100%; */
}
#img{
  display: none;
}
#img-label{
  display: block;
  cursor: pointer;
  border: 4px rgba(160, 160, 160, 0.099) solid;
  padding: 7px;
}
.subcontainer{
    min-height: 100%;
    /* border: 1px solid whitesmoke; */
    flex-grow: 1;
    color: var(--primary-text-color);
}
.delete-container img{
  height:7vh;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
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
</style>