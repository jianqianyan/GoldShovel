<template>
  <div class="ChangeMessage">
    <div class="ChangeMessageTitle">
      <p>更改信息</p>
    </div>
    <div class="MessageLeftBox">
      <div v-for="(item,index) in ListName" class="MessageLeftBoxSon">
        {{item}}
      </div>
    </div>
    <div class="MessageRightBox">
      <div class="MessageRightBoxInput">
        <el-input v-model="user.userName" size="mini"></el-input>
        </div>
    
      <div class="MessageRightBoxInput">
        <el-radio v-model="user.userSex" label="男">男</el-radio>
        <el-radio v-model="user.userSex" label="女">女</el-radio>
      </div>
      <div class="MessageRightBoxInput">
        <el-input v-model="user.userPassword"  size="mini"></el-input>
        </div>
  
      <div class="MessageRightBoxInput">
        <el-input v-model="user.userInformation"  size="mini"></el-input>
        </div>
    </div>
    <img-up @state="state" />
    <br>
     <el-button@click="ClickChange()">提交</el-button>
    <!-- <button @click="ClickChange()">提交</button> -->
    <div v-if="changeState == 1">更改成功</div>
  </div>
</template>

<script>
import ImgUp from "../GeneralComponents/ImgUp.vue";
export default {
  name: "ChangeMessage",
  components: {
    ImgUp,
  },
  data() {
    return {
      user: this.$store.state.User,
      upstate: "",
      changeState: 0,
      ListName: ["用户名称", "用户性别", "密码", "简介"],
    };
  },
  methods: {
    state(payload) {
      this.upstate = payload;
    },
    ClickChange() {
      if (this.upstate == "") {
        this.$axios({
          url:
            "/changeUser?userId=" +
            this.user["userId"] +
            "&&userName=" +
            this.user["userName"] +
            "&&userSex=" +
            this.user["userSex"] +
            "&&userPassword=" +
            this.user["userPassword"] +
            "&&userInformation=" +
            this.user["userInformation"],
        })
          .then((res) => {
            // console.log(res);
            this.$store.state.User = this.user;
            // console.log(this.$store.state.User);
            // console.log(this.user);
            this.changeState = 1;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$axios({
          url:
            "/changeUser?userId=" +
            this.user["userId"] +
            "&&userName=" +
            this.user["userName"] +
            "&&userSex=" +
            this.user["userSex"] +
            "&&userPassword=" +
            this.user["userPassword"] +
            "&&userInformation=" +
            this.user["userInformation"] +
            "&&userImgState=1",
        })
          .then((res) => {
            // console.log(res);

            this.changeState = 1;
            this.user.userImg = this.upstate;
            this.$store.state.User = this.user;
            // console.log(this.upstate);
            // console.log(this.$store.state.User);
            // console.log(this.user);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped>
.ChangeMessage {
  width: 100%;
  padding-left: 10px;
}
.MessageLeftBox {
  width: 10%;
  float: left;
  height: 200px;
}
.MessageRightBox {
  width: 90%;
  float: left;
  height: 200px;
}
.MessageRightBoxInput {
  width: 30%;
  height: 35px;
}
.ChangeMessageTitle {
  width: 100%;
  height: 50px;
  font-size: 20px;
}
.MessageLeftBoxSon {
  width: 100%;
  height: 35px;
}
</style>