<script setup lang="ts">
import  {type NavigationLink} from 'src/types'
import { RouterLink } from 'vue-router';
defineProps<{
  links?: NavigationLink[]
}>()
</script>

<template>
<header>
  <div class="container">
    <ul class="">
          <li v-for = "link in links">
            <RouterLink :to="link.url" class="">{{ link.name }}</RouterLink></li>
        </ul>
  </div>  
</header>
</template>

<style scoped>
.container{
  padding-top: 2vh;
  display: flex;
  /* border-bottom: 1px dotted  whitesmoke; */
  margin-bottom: 5vh ;
}
ul{
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  /* gap: 1vw; */
  background-color: rgba(240, 248, 255, 0.059);
  border-radius: 20px;
}
li{
 
  /* border-radius: 12%; */
  display: flex;
}
li a{
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  color: var(--primary-text-color);
  font-weight: 650;
  text-decoration: none;
  border-radius: 15px;
  /* flex-grow: 1; */
}
li a:hover{
  background-color: rgba(240, 248, 255, 0.115);
  /* border: 1px solid whitesmoke; */
  /* cursor: pointer; */
}
</style>