<template>
  <div class="">
    练习编程式导航
    <p>
      <button @click="goBack">后退一步</button>
      <button @click="go">后退两步</button>
      <button @click="goHome">回到首页</button>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  methods: {
    goBack() {
      this.$router.back();
    },
    go() {
      this.$router.go(-2); //回退两步 正数为前进
    },
    // goHome() {
    //   this.$router.push("/"); //无需传参数的
    //   this.$router.push({
    //     name: "User",
    //     params: {
    //       name: "liuchang",
    //       age: 21,
    //     },
    //   });
    // },
    goHome() {
      this.$router.push({
        path: "/user",
        query: {
          name: "haha",
          age: 666,
        },
      });
    //   this.$router.push({
    //     path: "/user",
    //     query: {
    //       name: "liuchang",
    //       age: 21,
    //     },
    //   });
    },
  },
  components: {},
};
</script>

<style scoped lang="stylus"></style>
