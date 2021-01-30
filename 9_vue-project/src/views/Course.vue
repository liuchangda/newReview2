<template>
  <div>
    <h1>课程</h1>
    <router-link to="/fe">前端</router-link> |
    <router-link to="/rd">后端</router-link>
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>