<template>
  <div class="CSSContainer"> 
    <Album 
      v-for="item in data" 
      :key="item.id"
      :urlImg="item.coverImgUrl"
      :playNum="item.shareCount"
      :playTitle="item.name"
      ></Album>
  </div>
</template>

<script lang="ts" setup>
import Album from "../globalComponent/album.vue";
import {FSSLItem} from "../../module/finechoiceSSListModule"

withDefaults(defineProps<{
  data:FSSLItem[]
}>(),{
  data:()=>[]
})


</script>

<style lang="less" scoped> 
.CSSContainer{
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
}
</style>