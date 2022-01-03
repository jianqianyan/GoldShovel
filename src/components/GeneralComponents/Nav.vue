<template>
  <div class="NavBar">
    <div class="NavBarBox-Left">
      <div v-for="(item, index) in NavList" class="NavBarBox-Left-ListSon">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="NavBarBox-Right">
      <div v-if="checkLogin() == 1" class="NavBar-Right-Box">
        <div class="NavBarBox-Right-ListSon">
          <router-link to="/Login">登录</router-link>
        </div>
        |
        <div class="NavBarBox-Right-ListSon">
          <router-link to="/Register">注册</router-link>
        </div>
      </div>
      <div v-else class="NavBar-Right-Box">
        <div class="NavBarBox-Right-ListSon">
          <router-link to="/Center">{{ checkLogin() }}</router-link>
        </div>
        |
        <div class="NavBarBox-Right-ListSon" @click="cancellation()">
          退出登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      NavList: [
        {
          name: "首页",
          link: "/Index",
        },
        {
          name: "菜谱",
          link: "/Menu",
        },
        {
          name: "排行榜",
          link: "/Rank",
        },
        {
          name: "菜品",
          link: "/Dish",
        },
      ],
    };
  },
  methods: {
    checkLogin() {
      // 判断是否登录
      if (this.$store.state.User == "") return 1;
      else {
        return this.$store.state.User.userName;
      }
    },
    cancellation() {
      this.$router.push({
        path: "/Login",
        query: {},
      });
      this.$store.state.User = "";
    },
  },
};
</script>

<style scoped>
.NavBar {
  width: 100%;
  height: 30px;
}
.NavBarBox-Left {
  width: 80%;
  height: 30px;
  float: left;
}
.NavBarBox-Right {
  width: 20%;
  height: 30px;
  float: left;
}
.NavBarBox-Left-ListSon {
  width: 150px;
  text-align: center;
  float: left;
  height: 30px;
}
a {
  color: black;
  text-decoration: none;
}
.NavBarBox-Left-ListSon :hover {
  color: lightslategray;
}
.NavBar-Right-Box {
  display: flex;
}
.NavBarBox-Right-ListSon {
  flex: 1;
  text-align: center;
}
.NavBarBox-Right-ListSon :hover {
  color: lightslategray;
}
</style>