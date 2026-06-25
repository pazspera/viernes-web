<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  // gsap.to(".anim-image", { x: 750, y: -120, duration: 3 });
  //gsap.to(".box", { x: 750, scale: 2, rotation: 360, fill: "yellow", duration: 3 });

  gsap.to(".poster", { x: 400, y: -90, duration: 3 });
  gsap.to(".bg", { x: 430, y: 200, scale: 12, duration: 3 })
})

</script>

<template>
  <section>
    <div class="container mx-auto py-4">
      <!-- <div class="box"></div>-->
      <!-- <img class="anim-image" src="/img/posters/poster_berberian.jpg"> -->

      <div class="min-h-full flex py-64">
        <div class="bg"></div>
        <img class="poster" src="/img/posters/poster_berberian.jpg">
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.anim-image,
.poster {
  width: 240px;
  height: auto;
}

.box,
.bg {
  background-color: red;
  z-index: -3;
}

.bg {
  height: 20px;
  width: 20px;
}

.box {
  height: 240px;
  width: 240px;
}
</style>