<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiperList">
        <div class="Swiper-box">{{ item }}</div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      swiperList: ["step1", "step2", "step3", "step4"],
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
}

.Swiper-box {
  width: 50%;
  height: 300px;
  /* background-color: red; */
  margin: 0 auto;
}
</style>