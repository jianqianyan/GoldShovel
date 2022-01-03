<template>
  <div class="MenuCreate">
    <div class="CreateBox">
      <div class="CreateBoxLeft">
        <div v-for="(item, index) in MenuList" :key="index" class="MenutextBox">
          {{ item }}
        </div>
        <div class="MenutextBox">菜品类别</div>
      </div>
      <div class="CreateBoxRight">
        <div
          v-for="(item, index) in InputList"
          :key="index"
          class="MenuInputBox"
        >
          <el-input v-model="InputList[index]" size="mini"></el-input>
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
    <imgUp></imgUp>
    <br />
    <el-button @click="submitMenu()">提交</el-button>
    <div v-if="createState == 1">创建成功</div>
  </div>
</template>

<script>
import imgUp from "../GeneralComponents/ImgUp";
export default {
  name: "MenuCreate",
  data() {
    return {
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
      createState: 0,
    };
  },
  components: {
    imgUp,
  },
  methods: {
    submitMenu() {
      this.$axios({
        url:
          "/CreateMenu?menuName=" +
          this.InputList[0] +
          "&&menuIntroduce=" +
          this.InputList[1] +
          "&&menuCate=" +
          this.clickCate,
      })
        .then((res) => {
          if (res.data != "-1") this.createState = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.CreateBox {
  width: 100%;
}
.CreateBoxLeft {
  width: 30%;
  float: left;
  height: 150px;
}
.CreateBoxRight {
  width: 70%;
  float: left;
  height: 150px;
}
.MenuCreate {
  padding-left: 10px;
}
.MenutextBox {
  height: 35px;
}
.MenuInputBox {
  height: 35px;
  width: 70%;
}
</style>