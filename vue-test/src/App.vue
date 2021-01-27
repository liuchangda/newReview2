<template>
  <div id="app">
    <com-header></com-header>
    <router-view class="main" />
    <com-footer></com-footer>
  </div>
</template>

<script>

import ComFooter from "./components/ComFooter.vue";
import ComHeader from "./components/ComHeader.vue";

export default {
  components: {
    ComHeader,
    ComFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #364f69;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #000;
  }
}
.main{
  padding: 1rem 0;
}
</style>
