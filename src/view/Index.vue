<template>
  <div class="Index">
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="Text" style="margin: auto"><p>这是首页</p></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="IndexBody"></div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
};
</script>

<style scoped>
.Index {
  width: 100%;
}
.el-carousel__item p {
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  text-align: center;
}

.IndexBody {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  /* background-color: red; */
}
</style>