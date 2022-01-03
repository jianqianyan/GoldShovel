<template>
  <div class="MenuNav">
    <p>八大菜系</p>
    <el-divider></el-divider>
    <div
      v-for="(item, index) in MenuCateOne"
      class="MenuNavSon"
      :class="{ MenuNavSonAction: index == isAction }"
      @click="chooseCate(item.name, index)"
    >
      <p>{{ item.name }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuNav",
  data() {
    return {
      MenuCateOne: [
        {
          name: "鲁菜",
        },
        {
          name: "川菜",
        },
        {
          name: "粤菜",
        },
        {
          name: "江苏菜",
        },
        {
          name: "闽菜",
        },
        {
          name: "浙江菜",
        },
        {
          name: "湘菜",
        },
        {
          name: "徽菜",
        },
      ],
      isAction: -1,
    };
  },
  methods: {
    chooseCate(name, index) {
      this.$emit("cate", name);
      this.isAction = index;
    },
  },
};
</script>

<style scoped>
.MenuNav {
  width: 100%;
  height: 500px;
  /* background-color: yellow; */
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px 10px;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  text-align: center;
}
.MenuNavSon {
  width: 50%;
  height: 50px;
  float: left;
  text-align: center;
  border-style: none;
  border-width: 1px;
  border-bottom-style: transparent;
}
.MenuNavSon hr {
  width: 80%;
  height: 0.2px;
  border-style: none;
}
.MenuNavSonAction hr {
  width: 60%;
  height: 0.2px;
  background-color: #409eff;
  border-style: none;
  color: #303133;
}
</style>