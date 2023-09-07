<template>
  <div class="CSSContainer"> 
    <Album 
      v-for="item in data" 
      :key="item.id"
      :urlImg="item.coverImgUrl"
      :playNum="item.shareCount"
      :playTitle="item.name"
      @click="handleClick(item)"
      ></Album>
  </div>
</template>

<script lang="ts" setup>
import Album from "../globalComponent/album.vue";
import {FSSLItem} from "../../module/finechoiceSSListModule";
import {useRouter} from "vue-router";

const router = useRouter();

withDefaults(defineProps<{
  data:FSSLItem[]
}>(),{
  data:()=>[]
})

const handleClick = (item)=>{
  router.push({
    path:"/songSheet",
    query:{
      id:item.id
    }
  });
}

</script>

<style lang="less" scoped> 
.CSSContainer{
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
}
</style>