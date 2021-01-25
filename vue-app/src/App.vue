<template>
  <div id="app">
    <!-- 四个页面全部要用到header和footer 但是在每个页面都引用 会很麻烦
        于是将header和footer放在App.vue中 因为哪个页面都是App的组件 所以放在app里就行
     -->
    <ComHeader></ComHeader>
    <!-- 页面Views在哪里渲染由router-view决定 -->
    <router-view />
    <ComFooter></ComFooter>
  </div>
</template>

<script>
import ComHeader from "@/components/ComHeader.vue";
import ComFooter from "@/components/ComFooter.vue";

export default {
  components: {
    ComHeader,
    ComFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #fff;
  }
}
</style>
