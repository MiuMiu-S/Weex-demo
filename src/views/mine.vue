<template>
  <div>
    <text class="abc">我的</text>
    <div class="searchDiv">
      <text class="abc">历史搜索记录</text>
    </div>

    <app-header></app-header>
  </div>
</template>
<style scoped>
  .abc {
    font-size: 50px;
    text-align: center;
  }
  .searchDiv{
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    height: 400px;
    background-color: pink;
  }
</style>
<script>
// import Vue from 'vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import AppHeader from '../components/app-header.vue'
export default {
  // name: 'carrousel'
  // ,data() {
  //   return {
  //     swiperOption: {
  //       autoplay: 3000,
  //       setWrapperSize :true
  //       ,pagination : '.swiper-pagination',
  //       paginationClickable :true,
  //       mousewheelControl : true,
  //       observeParents:true,
  //     },
  //   swiperSlides: [
  //       {imgUrl:"http://kstoreimages.b0.upaiyun.com/1472549137821.jpg"},
  //       {imgUrl:"http://kstoreimages.b0.upaiyun.com/1472549803206.jpg"},
  //       {imgUrl:"http://kstoreimages.b0.upaiyun.com/1472549858555.jpg"}
  //     ]
  //   }
  // }
  components: { AppHeader }
}

</script>
