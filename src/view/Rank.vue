<template>
  <div class="Rank">
    <div class="fansNumberRank">
      <p>粉丝数量排行榜</p>
      <el-table :data="userRank" stripe style="width: 100%">
        <el-table-column prop="userName" label="姓名" width="150">
        </el-table-column>
        <el-table-column
          prop="fansNumber"
          label="粉丝数量"
          width="150"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rank",
  data() {
    return {
      userRank: "",
    };
  },
  mounted() {
    this.$axios({
      url: "/UserRank?Page=10&&PageNumber=0",
    })
      .then((res) => {
        this.userRank = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.Rank {
  width: 100%;
}
.fansNumberRank {
  width: 300px;
  height: 500px;
  margin-left: 30px;
}
.fansNumberRank p {
  text-align: center;
}
</style>