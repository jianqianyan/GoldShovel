<template>
  <div class="Register">
    <div class="Register-Body">
      <div class="RegisterBox">
        <div v-for="(item, index) in RegisterList" :key="index">
          <p>{{ item }}</p>
          <div v-if="index == 1">
            <form action="">
              <label for=""
                ><input
                  type="radio"
                  value="男"
                  name="sex"
                  v-model="InputList[index]"
                />男</label
              >
              <label for=""
                ><input
                  type="radio"
                  value="女"
                  name="sex"
                  v-model="InputList[index]"
                />女</label
              >
            </form>
          </div>
          <div v-else>
            <input
              type="text"
              name=""
              id=""
              v-model="InputList[index]"
              class="inputOne"
            />
          </div>
        </div>
        <p>验证码</p>
        <ver-code />
        <br />
        <input type="text" name="" id="" v-model="vercode" />
        <br /><br /><br />
        <button @click="submitRegister()">注册</button>
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
import VerCode from "../components/GeneralComponents/VerCode";
export default {
  name: "Register",
  data() {
    return {
      RegisterList: ["姓名", "性别", "电话", "简介", "密码"],
      InputList: ["", "", "", "", ""],
      vercode: "",
      info: "",
    };
  },
  components: {
    VerCode,
  },
  methods: {
    submitRegister() {
      this.$axios({
        url:
          "/UserRegister?UserName=" +
          this.InputList[0] +
          "&&UserSex=" +
          this.InputList[1] +
          "&&UserPhone=" +
          this.InputList[2] +
          "&&UserInformation=" +
          this.InputList[3] +
          "&&UserPassword=" +
          this.InputList[4] +
          "&&Verification=" +
          this.vercode,
      })
        .then((res) => {
          console.log(res);
          if (res.data == -2) this.info = "验证码错误";
          else if (res.data == -3) this.info = "该手机号已经被注册";
          else if (res.data == -1) this.info = "其他错误";
          else this.info = "注册成功";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.Register {
  width: 100%;
}
.Register-Body {
  width: 100%;
  height: 650px;
  background: url("../assets/img/background.jpeg");
  background-size: cover;
  float: left;
}
.RegisterBox {
  width: 25%;
  /* justify-content: center; */
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  height: 630px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px auto;
  margin-top: 10px;
  background-color: white;
}
.RegisterBox button {
  margin: 0 auto;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  /* border-style: solid; */
}
.inputOne {
  width: 200px;
  height: 22px;
  border-radius: 5px;
  border-style: solid;
}
</style>