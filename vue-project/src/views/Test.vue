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
    goHome() {
      /* router.push()这种形式其实相当于router-link 参数为router-link中的to */
      //针对于路由传参是 path+query的形式
      this.$router.push({
        path: "/user",
        query: {
          name: "liuchang",
          age: 21,
        },
      });
      //针对于路由传参方式为 name+params
      this.$router.push({
        name: "User",
        params: {
          name: "liuchang",
          age: 21,
        },
      });
      //针对于路由传参方式为 url+params 
      this.$router.push({
        path: "/detail/111/222",
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="stylus"></style>
