<script setup lang="ts">
import Test01 from "./test_case/Test01.vue"
import Test02 from "./test_case/Test02.vue"
import Test03 from "./test_case/Test03.vue"
import Test04 from "./test_case/Test04.vue"
import Test05 from "./test_case/Test05.vue"
import Test06 from "./test_case/Test06.vue"



</script>

<template>
  <p class="header" > Vue3 Composition API の基本   https://b1san-blog.com/post/vue/vue-3-composition-api/ </p>
  <Test01 />
  <Test02 />
  <Test03 />
  <Test04 />
  <Test05 />
  <p class="header" > Vue3 slotのざっくりまとめ   https://qiita.com/gone0021/items/cc7aa1054e5dab2d7005 </p>
  <Test06 />

</template>

<style scoped>
p.header {
   height: 32px;
   font-weight: bold;
   font-size: 16px;
   color: #ffffff;
   background: #0080ff ;
   padding-top: 7px;
   padding-left: 5px;

}
</style>
