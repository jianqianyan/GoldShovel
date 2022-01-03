<template>
  <div>
    <img :src="getSrc()" alt="" />
  </div>
</template>

<script>
export default {
  name: "VerCode",
  methods: {
    getSrc() {
      return this.$store.state.verimg;
    },
  },
  props: {},
};
</script>
<style scoped>
</style>