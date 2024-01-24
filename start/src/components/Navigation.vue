<script setup lang="ts">
import  {type NavigationLink} from 'src/types'
defineProps<{
  links?: NavigationLink[]
}>()
</script>

<template>
<header>
  <div class="container">
    <ul class="">
          <li v-for = "link in links">
            <a :href="link.url" class="">{{ link.name }}</a></li>
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
  display: flex;
  flex-grow: 1;
  gap: 1vw;
  
}
li{
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border: 1px solid whitesmoke;
  border-radius: 29%;
}
a{
  color: whitesmoke;
  text-decoration: none;
}
</style>