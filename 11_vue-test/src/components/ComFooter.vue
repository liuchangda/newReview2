<template>
  <footer :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="menu in menuList" :key="menu.path" @click="switchMenu(menu)">
      <router-link :to="menu.path">{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapState(['curMenu']),
  },
  data() {
    return {
      menuList: [
        {
          name: "电影",
          path: "/",
          bgColor: "rgb(230, 130, 130)",
        },
        {
          name: "音乐",
          path: "/music",
          bgColor: "rgb(230, 180, 130)",
        },
        {
          name: "书籍",
          path: "/book",
          bgColor: "rgb(230, 230, 130)",
        },
        {
          name: "聊天",
          path: "/chat",
          bgColor: "rgb(253, 168, 196)",
        },
      ],
    };
  },
  methods: {
      ...mapMutations(['switchMenu']),
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: rgb(230, 130, 130);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.router-link-exact-active {
  color: #000;
  font-size: 0.41rem;
}
</style>