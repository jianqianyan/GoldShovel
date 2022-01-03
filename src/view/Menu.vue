<template>
  <div class="Menu">
    <div class="Menu-LeftBox">
      <div class="MenuNav">
        <menu-nav @cate="cate" />
      </div>
    </div>
    <div class="Menu-RightBox">
      <div class="Menu-RightBody" v-loading="loading" :data="MenuList">
        <div class="Menu-RightList">
          <div
            v-for="(item, index) in MenuList"
            class="Menu-RightBodySon"
            @click="MenuLook(item.menuId)"
          >
            <img :src="ImgTake(item.menuImg)" alt="" />
            {{ item.menuName }}
          </div>
        </div>
        <Pager
          :PageNumber="PageNumber"
          @TurnPage="TurnPage"
          class="MenuPager"
        ></Pager>
      </div>
    </div>
  </div>
</template>

<script>
import MenuNav from "../components/MenuComponents/MenuNav";
import Pager from "../components/GeneralComponents/Pager.vue";
export default {
  name: "Menu",
  data() {
    return {
      loading: true,
      MenuList: [],
      Page: 10,
      PageNumber: 0,
      NowNumber: 0,
      // PageNumber 表示有多少页
      // NowNumber 表示目前是第几页
      // Page 表示一页有多少个
    };
  },
  components: {
    MenuNav,
    Pager,
  },
  methods: {
    getMenu(cate) {
      this.loading = true;
      if (cate == null) {
        this.$axios({
          url: "/getMenu?Page=" + this.Page + "&&PageNumber=" + this.NowNumber,
        })
          .then((res) => {
            this.MenuList = res.data;
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.loading = true;
        this.$axios({
          url:
            "/getMenu?Page=" +
            this.Page +
            "&&PageNumber=" +
            this.NowNumber +
            "&&cate=" +
            cate,
        })
          .then((res) => {
            this.MenuList = res.data;
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    MenuLook(index) {
      this.$router.push({
        path: "/details",
        query: {
          id: index,
        },
      });
    },
    ImgTake(path) {
      if (path != null) return this.$store.state.baseImg + path;
      else return;
    },
    TurnPage(payload) {
      this.NowNumber += payload;
      this.getMenu();
    },
    TakePage(cate) {
      if (cate == null) {
        this.$axios({
          url: "/getMenuPage?Page=" + this.Page,
        })
          .then((res) => {
            this.PageNumber = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$axios({
          url: "/getMenuPage?Page=" + this.Page + "&&cate=" + cate,
        })
          .then((res) => {
            this.PageNumber = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cate(payload) {
      this.NowNumber = 0;
      console.log(payload);
      this.TakePage(payload);
      this.getMenu(payload);
    },
  },
  mounted() {
    this.TakePage();
    this.getMenu();
  },
};
</script>

<style scoped>
.Menu {
  width: 100%;
}
.Menu-LeftBox {
  width: 20%;
  height: 600px;
  /* background-color: red; */
  float: left;
  border-right-style: solid;
}
.Menu-RightBox {
  width: 70%;
  height: 600px;
  /* background-color: blue; */
  float: left;
}
.MenuNav {
  margin-left: 10%;
  width: 70%;
}
.Menu-RightBody {
  height: 500px;
  margin-top: 50px;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  margin-left: 10%;
  padding: 10px 10px;
}
.Menu-RightBodySon {
  width: 150px;
  height: 210px;
  float: left;
  margin: 10px 10px 0 20px;
  border-style: solid;
  border-width: 1px;
}
.Menu-RightBodySon img {
  width: 140px;
  margin-left: 5px;
  height: 180px;
}
.Menu-RightList {
  width: 100%;
  height: 450px;
  float: left;
}
</style>