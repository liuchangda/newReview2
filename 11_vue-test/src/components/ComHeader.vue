<template>
  <header :style="{ background: curMenu.bgColor }">
    <span @click="goHome">&lt;首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["switchMenu"]),
    goHome() {
      this.$router.push("/");
      this.switchMenu({
        name: "电影",
        bgColor: "rgb(230, 130, 130)",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: rgb(230, 130, 130);
  span {
    position: absolute;
    left: 0;
    padding: 0 0.1rem;
  }
}
</style>