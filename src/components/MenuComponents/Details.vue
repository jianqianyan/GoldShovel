<template>
  <div class="Details">
    <div class="MenuImg">
      <img :src="ImgTake(menu.menuImg)" alt="" />
    </div>
    <div class="MenuDetails">
      <p>菜谱名:{{ menu.menuName }}</p>
      <p>类型:{{ menu.menuCate }}</p>
      <p>作者:{{ UserName }}</p>
      <p>创建时间:{{ menu.creatTime }}</p>
      <p>简介:{{ menu.menuIntroduce }}</p>
    </div>
    <div class="MenuDish">
      <p>步骤</p>
      <swiper />
    </div>
    <div v-if="isUser == 1" class="changeButton">
      <el-button @click="changeMenu()">更改</el-button>
    </div>
  </div>
</template>

<script>
import Swiper from "../GeneralComponents/Swiper.vue";
export default {
  name: "",
  data() {
    return {
      MenuId: this.$route.query.id,
      menu: "",
      UserName: "",
      isUser: this.$route.query.isUser,
    };
  },
  components: {
    Swiper,
  },
  methods: {
    getUserName(UserId) {
      this.$axios({
        url: "/getUserNameByUserId?userId=" + UserId,
      })
        .then((res) => {
          this.UserName = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return this.UserName;
    },
    ImgTake(path) {
      if (path != null) return this.$store.state.baseImg + path;
      else return;
    },
    changeMenu() {
      this.$router.push({
        path: "/MenuChange",
        query: {
          menu: this.menu,
        },
      });
    },
  },
  mounted() {
    this.$axios({
      url: "/getMenuByMenuId?menuId=" + this.MenuId,
    })
      .then((res) => {
        this.menu = res.data;
        this.getUserName(this.menu.creatUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.Details {
  width: 100%;
}
.MenuImg {
  width: 30%;
  float: left;
  height: 320px;
  /* background-color: red; */
}
.MenuImg img {
  width: 70%;
  height: 300px;
  float: right;
}
.MenuDetails {
  width: 70%;
  float: left;
  height: 320px;
  /* background-color: blue; */
}
.MenuDish {
  width: 100%;
  height: 300px;
  /* background-color: red; */
  float: left;
}
.changeButton {
  position: absolute;
  left: 1400px;
  top: 380px;
  /* float: left; */
}
</style>
