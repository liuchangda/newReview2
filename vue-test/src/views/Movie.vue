<template>
  <div>电影</div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
        
    };
  },
  methods: {
    /* 跨域问题
        跨域问题：当你网页所在的地址 与你接口的地址（协议，域名，端口号）任何一个不同都会引发跨域问题（因为浏览器的同源策略）
        解决：jsonp,让后端帮忙配置(cors),服务器代理
      */
    getData() {
        //记得必须用v2
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let tvUrl =
        "https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=0&count=18";
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
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