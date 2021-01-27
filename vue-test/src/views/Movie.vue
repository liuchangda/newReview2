<template>
  <ul>
    <li v-for="item in tvList" :key="item.id" class="tv-item" @click="getDetail(item.id)" >
      <div class="img-box">
        <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt="" />
      </div>
      <div class="content">
        <h3>{{ item.title }}</h3>
        <span>{{ item.info }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Movie",
  created() {
    this.getData();
    this.lazyLoad();
  },
  data() {
    return {
      tvList: [],
      start: 0,
      /* 防抖
        当滚动到页面底部 -> 满足条件 -> 请求数据 -> 如果数据请求效果很慢 -> 新的数据没有过来,数组没有变长,仍然处于页面底部 -> 满足条件 -> 请求数据(一直请求)
      */
      isFinished: true,
    };
  },
  methods: {
    /* 跨域问题
        跨域问题：当你网页所在的地址 与你接口的地址（协议，域名，端口号）任何一个不同都会引发跨域问题（因为浏览器的同源策略）
        解决：jsonp,让后端帮忙配置(cors),第三方服务器代理jsonbird
      */
    getData() {
      if (this.isFinished) {
        this.isFinished = false;
        //记得必须用v2
        let baseUrl = "https://bird.ioliu.cn/v2?url=";
        let tvUrl =
          "https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1";
        this.axios
          .get(baseUrl + tvUrl, {
            params: {
              start: this.start,
              count: 10,
            },
          })
          .then((res) => {
            //到底部是添加而不是替换
            //this.tvList = this.tvList.concat(res.data.subject_collection_items);
            this.tvList = [
              ...this.tvList,
              ...res.data.subject_collection_items,
            ];
            this.isFinished = true;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    lazyLoad() {
      //获取html元素
      let htmlDom = document.documentElement;
      //获取设备高度 可视高度 不变的 clientHeight 返回元素的可见高度
      let deviceH = htmlDom.clientHeight;
      //获取页面高度 offsetHeight返回元素高度 最大高度
      let fullH = 0;
      //获取滚动出去的距离 scrollTop 返回元素上边缘与视图之间的距离
      let scrollT = 0;

      window.onscroll = () => {
        scrollT = htmlDom.scrollTop;
        fullH = htmlDom.offsetHeight;
        //console.log(fullH, scrollT, deviceH);
        if (fullH == scrollT + deviceH) {
          this.start += 10;
          this.start < 50 ? this.getData() : "";
        }
      };
    },
    //跳转电视剧详情页
    getDetail(id){
      //编程式导航的路径内容 相当于router-link中的to的内容
      this.$router.push('/tvdetail/'+id);

    },
  },
};
</script>

<style lang="scss" scoped>
.tv-item {
  display: flex;
  border-bottom: 1px dashed #ccc;
  padding: 10px 0;
  .img-box {
    flex: 3;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 5;
    text-align: center;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-weight: bold;
    }
  }
}
</style>