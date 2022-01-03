<template>
  <div class="Login">
    <div class="Login-body">
      <div class="Login-Box">
        <p>电话号码</p>
        <input type="text" v-model="UserPhone" />
        <p>密码</p>
        <input type="text" v-model="UserPassword" />
        <p>验证码</p>
        <input type="text" v-model="VerCode" />
        <br /><br />
        <ver-code />
        <br /><br />
        <button @click="Login()">登录</button>
        <div>{{ info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VerCode from "../components/GeneralComponents/VerCode.vue";
export default {
  name: "Login",
  components: {
    VerCode,
  },
  data() {
    return {
      UserPhone: "",
      UserPassword: "",
      VerCode: "",
      info: "",
    };
  },
  methods: {
    Login() {
      if (
        this.UserPhone != "" &&
        this.UserPassword != "" &&
        this.VerCode != ""
      ) {
        this.$axios({
          url:
            "/UserLogin?UserPhone=" +
            this.UserPhone +
            "&&UserPassword=" +
            this.UserPassword +
            "&&Verification=" +
            this.VerCode,
        })
          .then((res) => {
            if (res.data.data == "-1") this.info = "验证码错误";
            else if (res.data.data == "-2") this.info = "密码错误";
            else {
              this.$store.state.User = res.data.user;
              this.$router.push({
                path: "/Index",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    },
  },
};
</script>

<style scoped>
.Login {
  /* display: flex; */
  width: 100%;
  /* text-align: center; */
}
.Login-body {
  width: 100%;
  float: left;
  display: flex;
  background: url("../assets/img/background.jpeg");
  background-size: cover;
}
.Login-Box {
  width: 18%;
  /* justify-content: center; */
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  height: 400px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: white;
}
.Login-Box input {
  width: 200px;
  height: 22px;
  border-radius: 5px;
  border-style: solid;
}
</style>