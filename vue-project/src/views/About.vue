<template>
  <div class="">
    <h1>This is an about page</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  beforeRouteEnter(to, from, next) {
    console.log('jin');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('chu');
    next();
  },
};
</script>

<style scoped lang="stylus"></style>
