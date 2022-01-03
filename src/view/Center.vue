<template>
  <div class="Center">
    <div class="UserMessage">
      <div class="UserMessage-ImgBox">
        <img :src="ImgTake(user.userImg)" alt="" />
      </div>
      <div class="UserMessage-MessageBox">
        <p>用户名称: {{ user.userName }}</p>
        <p>用户性别: {{ user.userSex }}</p>
        <p>用户简介: {{ user.userInformation }}</p>
        <p>用户注册时间: {{ user.userRegistime }}</p>
        <p>粉丝数量: {{ user.fansNumber }}</p>
        <el-button @click="checkMessage()">更改信息</el-button>
      </div>
    </div>
    <hr />
    <div class="UserMenu">
      <div class="UserMenuBody">
        <div
          v-for="(item, index) in userMenu"
          class="UserMenuSon"
          @click="MenuLook(item.menuId)"
        >
          <img :src="ImgTake(item.menuImg)" alt="" />
          {{ item.menuName }}
        </div>
        <Pager
          :PageNumber="PageNumber"
          @TurnPage="TurnPage"
          class="MenuPager"
        ></Pager>
      </div>
    </div>
    <div
      class="ChangeMenu"
      title="新建菜谱"
      @click="drawer = true"
      type="primary"
    >
      <svg
        t="1641109405732"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2134"
        width="50"
        height="50"
      >
        <path
          d="M668.734694 532.897959H355.265306c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h313.469388c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z"
          p-id="2135"
          fill="#1296db"
        ></path>
        <path
          d="M512 689.632653c-11.493878 0-20.897959-9.404082-20.897959-20.897959V355.265306c0-11.493878 9.404082-20.897959 20.897959-20.897959s20.897959 9.404082 20.897959 20.897959v313.469388c0 11.493878-9.404082 20.897959-20.897959 20.897959z"
          p-id="2136"
          fill="#1296db"
        ></path>
        <path
          d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
          p-id="2137"
          fill="#1296db"
        ></path>
      </svg>
    </div>
    <el-drawer title="新建菜谱" :visible.sync="drawer" :direction="direction">
      <menu-create />
    </el-drawer>
  </div>
</template>

<script>
import Pager from "../components/GeneralComponents/Pager.vue";
import MenuChange from "../components/MenuComponents/MenuChange.vue";
import MenuCreate from "../components/MenuComponents/MenuCreate.vue";
export default {
  name: "Center",
  data() {
    return {
      user: this.$store.state.User,
      userMenu: "",
      Page: 5,
      PageNumber: 0,
      NowNumber: 0,
      // PageNumber 表示有多少页
      // NowNumber 表示目前是第几页
      // Page 表示一页有多少个
      drawer: false,
      direction: "rtl",
    };
  },
  components: {
    Pager,
    MenuCreate,
    MenuChange,
  },
  methods: {
    ImgTake(path) {
      if (path != null) return this.$store.state.baseImg + path;
      else return;
    },
    checkMessage() {
      this.$router.push({
        path: "/ChangeMessage",
      });
    },
    MenuLook(index) {
      this.$router.push({
        path: "/details",
        query: {
          id: index,
          isUser: 1,
        },
      });
    },
    TurnPage(payload) {
      this.NowNumber += payload;
      this.getMenu();
    },
    TakePage() {
      this.$axios({
        url:
          "/getMenuPageByUserId?Page=" +
          this.Page +
          "&&userId=" +
          this.user.userId,
      })
        .then((res) => {
          this.PageNumber = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMenu() {
      this.$axios({
        url:
          "/getMenuByUserId?userId=" +
          this.user.userId +
          "&&Page=" +
          this.Page +
          "&&PageNumber=" +
          this.NowNumber,
      })
        .then((res) => {
          this.userMenu = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    NewMenu() {
      this.$router.push({
        path: "/MenuCreate",
      });
    },
  },
  mounted() {
    this.TakePage();
    this.getMenu();
  },
};
</script>

<style scoped>
.Center {
  width: 100%;
}
.UserMessage {
  width: 100%;
  height: 400px;
  /* background-color: red; */
  float: left;
}
.UserMessage-ImgBox {
  width: 30%;
  height: 400px;
  float: left;
}
.UserMessage-ImgBox img {
  width: 80%;
  height: 350px;
  margin: 0 auto;
}
.UserMessage-MessageBox {
  width: 70%;
  height: 400px;
  float: left;
}
.UserMenuSon {
  width: 150px;
  height: 210px;
  float: left;
  margin: 10px 10px 0 20px;
  border-style: solid;
  border-width: 1px;
}
.UserMenuSon img {
  width: 140px;
  margin-left: 5px;
  height: 180px;
}
.UserMenuBody {
  width: 65%;
  /* height: 350px; */
  margin: 0 auto;
}
.ChangeMenu {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 650px;
  left: 1300px;
  z-index: 999;
}
.MenuPager {
  margin-top: 15px;
}
</style>