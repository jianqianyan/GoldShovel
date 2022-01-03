<template>
  <div class="Pager">
    <div class="PagerBody">
      <el-button-group>
        <div class="PrePage" v-if="NowNumber == 0"></div>
        <div class="PrePage-display" v-else>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            @click="upPage"
            size="mini"
            >上一页</el-button
          >
        </div>
        <div class="NowPage">
          <el-input v-model="NowNumber" placeholder="" size="mini"> </el-input>
        </div>
        <div class="NextPage" v-if="NowNumber == PageNumber"></div>
        <div class="NextPage-display" v-else>
          <el-button type="primary" @click="nextPage" size="mini"
            >下一页<i class="el-icon-arrow-right el-icon--right"></i
          ></el-button>
        </div>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    PageNumber: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      NowNumber: 0,
      LeftNumber: 0,
    };
  },
  methods: {
    upPage() {
      this.$emit("TurnPage", -1);
      this.NowNumber--;
    },
    nextPage() {
      this.$emit("TurnPage", 1);
      this.NowNumber++;
    },
  },
};
</script>

<style scoped>
.Pager {
  width: 100%;
  height: 30px;
  float: left;
}
.PrePage {
  float: left;
  width: 80px;
  height: 30px;
}
.PrePage-display {
  float: left;
  width: 80px;
  height: 30px;
}
.NowPage {
  float: left;
  width: 50px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
}
.NextPage {
  float: left;
  width: 80px;
  height: 30px;
}
.NextPage-display {
  float: left;
  width: 80px;
  height: 30px;
}

/* button {
  width: 100%;
  height: 25px;
  border-radius: 2px;
  border-width: 1px; */
/* } */
/* input {
  width: 90%;
  height: 20px;
  margin: 0 auto;
} */
.PagerBody {
  margin: 0 auto;
  width: 230px;
  height: 30px;
}
</style>

