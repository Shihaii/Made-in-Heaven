<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from "vue";
import type { Character } from "../types";
import CreateCharacterForm from "./CreateCharacterForm.vue";
import DeleteCharacterModal from "./DeleteCharacterModal.vue"
import EditCharacterModal from "./EditCharacterModal.vue"
import { deleteCharacter, getCharacters } from "@/controllers/CharacterController";


var characters : Ref<Character[]> | Ref = ref();

const fetchCharacters = async () => {
characters.value = await getCharacters();
console.log("characters in DesignManagment ",characters);
} 
fetchCharacters();
// const characters: Character[] = [
//   {
//     id:"",
//     name: "Made in heaven",
//     img: "../assets/made-in-heaven.png",
//     description: "aaa",
//     ability: "Time acceleration",
//     host: "Pucci",
//     show: false,
//   },
//   {
//     id:"",
//     name: "Star platinum",
//     img: "../assets/dirty-deeds-done-dirt-cheap.png",
//     description: "ooo",
//     ability: "Ora ora ora",
//     host: "Jotaro",
//     show: false,
//   }
// ];

const getImageSrc = (image_src : ArrayBuffer) => {
  // try {
  //   const imageUrl = new URL(`${image_src}`, import.meta.url).href;
  //   return imageUrl;
  // } catch (error) {
  //   console.error(error);
  // }
    var arrayBufferView = new Uint8Array( image_src );
    var blob = new Blob( [ arrayBufferView ], { type: "image/*" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    console.log("Imageurl",imageUrl)
    return imageUrl;

}
var isdeleteCharacterModal : Ref<boolean> = ref(false);
const deleteCharacterModal = () => {
isdeleteCharacterModal.value = true;
}
var popup = ref(false);
const changeState = () => {
    console.log(popup)
    if(popup)popup=ref(false);
    else popup = ref(true);
    console.log(popup)
    return popup;
}
</script>
<template>
  
    <div class="space">
   
   <div class="characters-container">
     
       <CreateCharacterForm ></CreateCharacterForm>
       <div class="character-container" v-for="character in characters">
           <div class="image-container subcontainer">
               <img :src="getImageSrc(character.img.data)" alt=""> 
           </div>
           <div class="content-container">
             <div class="header-container subcontainer">{{ character.name }}</div>
           </div>
           
           <div class="tools-container subcontainer">
            <div class="checkbox-container subcontainer"><label for="published">Published</label><br><input type="checkbox" v-model="character.show" name="published" id="published"></div>
           <div class="delete-container subcontainer">
            <EditCharacterModal :character="character"></EditCharacterModal>
           </div>
           <div class="delete-container subcontainer">
             <DeleteCharacterModal :id="character.id"></DeleteCharacterModal>
           </div>
           </div>
           
       </div>
   </div>
 </div>
  
</template>

<style scoped>
.space {
  min-height: 100vh;
}
.characters-container {
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    flex-direction: column;
    gap: 4vh;
    height: 100%;
    background-color: rgba(240, 248, 255, 0.059);
    padding: 4vh;
    border-radius: 20px;
    /* filter: blur(20px); */
}
.character-container {
  /* border: 1px solid whitesmoke; */
  background-color: rgba(160, 160, 160, 0.099);
  border-radius: 15px;
  min-height: 20vh;
  display: flex;
  padding: 1vh;

}
.subcontainer{
    min-height: 100%;
    /* border: 1px solid whitesmoke; */
    flex-grow: 1;
    color: var(--primary-text-color);
}
.image-container{
    max-width: 20%;
    width:20%;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-height: 20vh;
}
.image-container img{
    max-width: 100%;
    max-height: 100%;
    /* width: 100%; */
    /* object-fit:none; */
}
.content-container{
  display: flex;
  flex-direction: column;
  width: 50%;

}
.header-container{
    
    text-align: center;
    align-self: center;
    color: var(--primary-text-color);
    font-size: 1.6rem;
}
.tools-container{
  flex-grow: 1;
  display: flex;
  flex-direction: row; 
  width:40%;
}
.checkbox-container{
    text-align: center;
    width: 15%;
}
.delete-container{
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.delete-container img{
  height:7vh;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}

@media(max-width: 900px) {
  .characters-container {
    margin-left: 0vw;
    margin-right: 0vw;
    display: flex;
    flex-direction: column;
    gap: 4vh;
    height: 100%;
    background-color: rgba(240, 248, 255, 0.059);
    padding: 2vh;
    border-radius: 20px;
    /* filter: blur(20px); */
}
.character-container {
  /* border: 1px solid whitesmoke; */
  background-color: rgba(160, 160, 160, 0.099);
  border-radius: 15px;
  min-height: 20vh;
  display: flex;
  padding: 1vh;
  flex-direction: column;
  align-items: center;

}
.image-container{
  width: 100%;
  max-height:fit-content;
}

.image-container img{

  max-width: 100%;
    max-height: 100%;
}
.tools-container{
  width:100%
}
}
</style>
