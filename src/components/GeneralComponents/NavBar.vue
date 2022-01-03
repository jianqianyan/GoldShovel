<template>
  <div class="NavBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      name="NavBar"
    >
      <el-menu-item
        :index="index.toString()"
        v-for="(item, index) in NavList"
        :key="index"
        @click="JumpPage(item.link)"
      >
        <router-link :to="item.link">{{ item.name }}</router-link>
      </el-menu-item>
      <div v-if="checkLogin() == 1">
        <el-menu-item index="5" style="float: right">
          <router-link to="/Login">登录</router-link>
        </el-menu-item>
        <el-menu-item index="6" style="float: right">
          <router-link to="/Register">注册</router-link>
        </el-menu-item>
      </div>
      <div v-else>
        <el-menu-item index="7" style="float: right" @click="cancellation()">
          退出登录
        </el-menu-item>
        <el-menu-item index="8" style="float: right" @click="ToCenter()">
          {{ checkLogin() }}
        </el-menu-item>
      </div>
    </el-menu>
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
      activeIndex: "1",
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
    ToCenter() {
      this.$router.push({
        path: "/Center",
      });
    },
    JumpPage(path) {
      this.$router.push({
        path: path,
      });
    },
  },
};
</script>

<style scoped>
.NavBar {
  width: 100%;
  height: 70px;
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