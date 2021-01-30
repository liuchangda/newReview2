<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Course</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 
      路由传参：
        path + query : 地址栏【能】够看到参数，刷新页面时参数【不会】丢失
        name + params : 地址栏【不能】够看到参数，刷新页面时参数【会】丢失
        url + params : 地址栏【能】够看到参数，刷新页面时参数【不会】丢失
     -->
      <router-link :to="{path:'/user',query:{name:'xiaoming',age:12}}">User</router-link> |
      <!-- <router-link :to="{name:'User',params:{name:'zhaosi',age:88}}">User</router-link> | -->
      <router-link to="/detail/liuneng/99">Detail</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/count">vuex</router-link> 

    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
