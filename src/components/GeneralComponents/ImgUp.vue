<template>
  <div>
    <el-upload
      action=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :http-request="upload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ImgUp",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    upload(param) {
      const formData = new FormData();
      formData.append("file", param.file);
      const url = this.$store.state.upImg;
      this.$axios
        .post(url, formData)
        .then((res) => {
          // console.log("上传图片成功");
          // console.log(res);
          // console.log(res.data);
          if (res.data == "err") this.UpState("");
          else this.UpState(res.data);
        })
        .catch((response) => {
          console.log("图片上传失败");
          console.log(data.data);
          this.UpState("");
        });
    },
    UpState(state) {
      this.$emit("state", state);
      // console.log(state);
    },
  },
};
</script>

<style scoped>
</style>