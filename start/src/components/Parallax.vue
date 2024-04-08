<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
const text  = ref(null);

const handleScroll = () => {
    console.log("oaoefne")
let value = window.scrollY;
 let text = document.getElementById('text');
 let obj1 = document.getElementById('cosmic-obj-1');
 let obj2 = document.getElementById('cosmic-obj-2');
 if(text){    
        text.style.top = value * -1 + 'px'  ;
        // text.style.opacity = 1/value  + ''  ;
}
if(obj1){
    obj1.style.right = value * -1.25 + 'px'  ;
}
if(obj2){
    obj2.style.left = value * -0.5 + 'px'  ;
}
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>


<template>
    <div class="parallax"  >
        <div class="fixed-container">
            <img src="../assets/moon-pink.png">
        </div>
        <div class="relative-container">
            <div id="text" class="text-container"  ref="text">
            <h1>Stone ocean</h1>
        </div>
        </div>
        
        <div id="cosmic-obj-1" class="absolute-container rotate" style="top: -10vh;">
            <img src="../assets/purple-black-hole.png" alt="">
        </div>
        <div id="cosmic-obj-2" class="absolute-container expansion" style="top: 15vh; left: 0; width: 40vw;">
            <img src="../assets/cosmic-nebula-2.png" style="width: 60vw;" alt="">
        </div>
        <div class="black-hole">
            <div class="top">
                <img src="../assets/white-portal-top.png">
            </div>
          <div class="bottom space-static">
            <img src="../assets/white-portal-bottom.png" alt="">
          </div>
        </div>
    </div>
        
</template>

<style scoped>
.parallax{
    position: relative;
    height: 105vh;
    max-height: 110vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
.fixed-container{
    position: fixed;
    max-height: inherit;
    max-height: 60vh;
    border-radius: 80%;
    z-index: 5;

}
.fixed-container img{
    max-height: 60vh;
    border-radius: 80%;
   
}
.black-hole{
display: flex;
justify-content: center;
flex-direction: column;
   position: absolute;
   max-height: 60vh;
   /* max-width: 100vh; */
   left: 0;
    right: 0;
    bottom: 0;
}
.black-hole img{
   max-height: inherit;
   /* max-width: 100%; */
   height: 20vh;
   aspect-ratio: 8/1;
   /* opacity: 90% ; */
}
.top{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.bottom{
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 6;
}
.absolute-container{
    position: absolute;
    top: 0vh;
    right: 10vh;
    max-width: 25vw;
    
}
.absolute-container img{
   
    max-width: inherit;
}
.text-container{
    position: relative;
    color: var(--primary-text-color);
    top: 0%;
    align-self: center;
    text-align: center;
    z-index: 6;
    text-shadow: 1px 1px 3px black;

}

.text-container h1{
    position: relative;
    
  top: 0;

}
.relative-container{
    position: relative;
    top: 27%;
}
@keyframes rotate{
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
.rotate{
    animation-name: rotate;
    animation-duration: 130s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes expansion{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.08);
    }
    100%{
        transform: scale(1);
    }
}
.expansion{
    animation-name: expansion;
    animation-duration: 7s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-out;
}
</style>