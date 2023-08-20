<template>
  <swiper
      style="height: 100%;"
      :modules="modules"
      :slides-per-view="3"
      :space-between="spaceBetween"
      :navigation="showIndicator"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @mouseover="showIndicator = true"
      @mouseleave="showIndicator = false"
    >
    <slot name="swiperSlide"></slot>
  </swiper>
</template>

<script lang="ts" setup>
  import {ref} from "vue"
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/navigation';

  defineProps<{
    spaceBetween:{
      type:number,
    }
  }>();
  
  
  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
  const modules = [Navigation, Pagination, Scrollbar, A11y];
  const showIndicator = ref(false);

</script>

<style>
.marginContainer{
  margin: 0 20px;
}
.swiper{
  padding: 0px 20px;
}
.swiper-button-prev:after{
  font-size: 20px;
  position: absolute;
  left: -4px;
  color: #bbb;
}
.swiper-button-next:after{
  font-size: 20px;
  position: absolute;
  right: -10px;
  color: #bbb;
}
</style>