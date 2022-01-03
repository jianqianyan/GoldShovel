<template>
  <div>
    <div class="ChangeBox">
      <div class="ChangeBoxLeft">
        <div v-for="(item, index) in MenuList" :key="index">
          {{ item }}
        </div>
        <p>菜品类别</p>
      </div>
      <div class="ChangeBoxRight">
        <div v-for="(item, index) in InputList" :key="index">
          <input type="text" name="" id="" v-model="InputList[index]" />
          {{ InputList[index] }}
        </div>
        <select name="" id="" v-model="clickCate">
          <option
            v-for="(item, index) in MenuCateOne"
            :value="item.name"
            :key="index"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
    <imgUp @state="state"></imgUp>
    <el-button @click="submitMenu()">提交</el-button>
    <div v-if="changeState == 1">
      <p>更改成功</p>
    </div>
  </div>
</template>

<script>
import imgUp from "../GeneralComponents/ImgUp";
export default {
  name: "MenuChange",
  data() {
    return {
      menu: this.$route.query.menu,
      MenuList: ["菜谱名称", "菜谱简介"],
      InputList: ["", ""],
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
      clickCate: "",
      changeState: 0,
    };
  },
  components: {
    imgUp,
  },
  methods: {
    state(payload) {
      this.upstate = payload;
    },
    submitMenu() {
      if (this.upstate == "") {
        this.$axios({
          url:
            "/changeMenu?menuId=" +
            this.menu.menuId +
            "&&menuName=" +
            this.InputList[0] +
            "&&menuIntroduce=" +
            this.InputList[1] +
            "&&menuCate=" +
            this.clickCate +
            "menuImgState=1",
        })
          .then((res) => {
            if (res.data == "OK") {
              this.changeState = 1;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$axios({
          url:
            "/changeMenu?menuId=" +
            this.menu.menuId +
            "&&menuName=" +
            this.InputList[0] +
            "&&menuIntroduce=" +
            this.InputList[1] +
            "&&menuCate=" +
            this.clickCate,
        })
          .then((res) => {
            if (res.data == "OK") {
              this.changeState = 1;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {},
  created() {
    this.InputList[0] = this.menu["menuName"];
    this.InputList[1] = this.menu["menuIntroduce"];
    this.clickCate = this.menu["menuCate"];
  },
  //   created() {
  //     this.$axios({
  //       url: "/getMenuByMenuId?menuId=" + this.MenuId,
  //     })
  //       .then((res) => {})
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
};
</script>

<style scoped>
.ChangeBox {
  width: 100%;
}
.ChangeBoxLeft {
  width: 50%;
  float: left;
  height: 200px;
}
.ChangeBoxRight {
  width: 50%;
  float: left;
  height: 200px;
}
</style>