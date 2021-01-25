<template>
  <footer :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="menu in menuList" @click="setCurMenu(menu)" :key="menu.path">
      <router-link :to="menu.path">{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  data() {
    return {
      menuList: [
        { path: "/", name: "电影", bgColor: "rgb(250, 160, 86)" },
        { path: "/music", name: "音乐", bgColor: "rgb(253, 221, 78)" },
        { path: "/book", name: "书籍", bgColor: "rgb(245, 111, 104)" },
        { path: "/chat", name: "聊天", bgColor: "rgb(300, 200, 99)" },
      ],
    };
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  background: rgb(250, 160, 86);

  position: fixed;
  bottom: 0;
}
</style>