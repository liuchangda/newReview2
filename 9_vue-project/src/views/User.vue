<template>
  <div class="">
    <h1>用户页</h1>
    <p>名字：{{ $route.query.name }}</p>
    <!-- <p>名字：{{ $route.params.name }}</p> -->
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
        age: this.$route.query.age,
      // age: this.$route.params.age,
    };
  },
  components: {},
};
</script>

<style scoped lang="stylus"></style>
