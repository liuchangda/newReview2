<template>
  <div>
    <div class="img-box">
      <img :src="'https://images.weserv.nl/?url=' + detailObj.img" alt="" />
    </div>
    <div class="content">
      <h2>{{ detailObj.title }}</h2>
      <p>{{ detailObj.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "tvlist",
  created() {
    this.getData();
  },
  data() {
    return {
      detailObj: {
        img: "",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    getData() {
      //跳转页面路由传参
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/" +
            this.$route.params.id
        )
        .then((res) => {
          this.detailObj.title = res.data.title;
          this.detailObj.content = res.data.intro;
          this.detailObj.img = res.data.cover_url;

          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>