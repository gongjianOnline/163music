<template>
  <div > 
    <Carousel :items-to-show="2" snap-align="start">
      <slot name="swiperSlide"></slot>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

  </div>
</template>

<script lang="ts" setup>
import { Carousel, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'



</script>

<style lang="less" scoped>

</style>