<script setup lang="ts">
import { ref } from "vue";
import "@/assets/base.css";
import Loading from "../components/TimeAccelerationAnimation.vue";
import MadeInHeaven from "../components/MadeInHeaven.vue";
import Parallax from "../components/Parallax.vue";

const counter = ref(0);


</script>

<template>
 
    <Parallax></Parallax>
    <div class="space" style="z-index: 1000">
      <MadeInHeaven
        header="Made in heaven"
        image_src="../assets/made-in-heaven.png"
        :direction="true"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          nulla turpis. Pellentesque porta nisi aliquet, viverra purus a,
          tincidunt velit. Ut commodo massa id sem tempus dignissim. Suspendisse
          quis mauris vitae diam convallis posuere eu ut urna. Etiam facilisis,
          mauris ut semper euismod, lorem lectus dapibus ante, sed fermentum mi
          libero ac risus. Vivamus dapibus dapibus dolor ut maximus. Praesent
          pretium dictum tortor sit amet pulvinar. Pellentesque scelerisque
          magna erat, at rutrum risus facilisis sit amet. In hac habitasse
          platea dictumst. Suspendisse rutrum nulla id felis pellentesque, at
          maximus nisi cursus. Quisque laoreet mauris non mi scelerisque, sit
          amet aliquet leo ultricies. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Ut et enim
          orci."
      ></MadeInHeaven>
      <MadeInHeaven
        header="Dirty deeds done dirt cheap"
        image_src="../assets/dirty-deeds-done-dirt-cheap.png"
        :direction="false"
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          nulla turpis. Pellentesque porta nisi aliquet, viverra purus a,
          tincidunt velit. Ut commodo massa id sem tempus dignissim. Suspendisse
          quis mauris vitae diam convallis posuere eu ut urna. Etiam facilisis,
          mauris ut semper euismod, lorem lectus dapibus ante, sed fermentum mi
          libero ac risus. Vivamus dapibus dapibus dolor ut maximus. Praesent
          pretium dictum tortor sit amet pulvinar. Pellentesque scelerisque
          magna erat, at rutrum risus facilisis sit amet. In hac habitasse
          platea dictumst. Suspendisse rutrum nulla id felis pellentesque, at
          maximus nisi cursus. Quisque laoreet mauris non mi scelerisque, sit
          amet aliquet leo ultricies. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Ut et enim
          orci."
      ></MadeInHeaven>
      <Loading></Loading>
      <div>
        <button @click="counter++">You clicked me {{ counter }} times</button>
      </div>
    </div>
</template>
