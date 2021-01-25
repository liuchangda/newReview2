<template>
  <!-- 首先找公共组件 header和footer在每个页面都有 所以设置成公共组件 -->
  <header :style="{ background: curMenu.bgColor }">
    <span @click="goHome">《首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/");
      this.setCurMenu({
        name: "电影",
        bgColor:'rgb(250, 160, 86)'
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  background: rgb(250, 160, 86);
  span {
    position: absolute;
    left: 0;
  }
}
</style>
