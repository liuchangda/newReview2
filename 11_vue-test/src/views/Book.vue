<template>
  <div>
    <div class="carousel">
      <el-carousel :interval="2000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="'https://images.weserv.nl/?url=' + item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab-list">
      <el-tabs v-model="activeName" :stretch="true" @tab-click="changeList">
        <el-tab-pane label="虚构类" name="book_fiction"></el-tab-pane>
        <el-tab-pane label="非虚构类" name="book_nonfiction"></el-tab-pane>
        <ul>
          <li class="book-item" v-for="item in bookList" :key="item.id">
            <div class="img-box">
              <img
                :src="'https://images.weserv.nl/?url=' + item.cover.url"
                alt=""
              />
            </div>
            <div class="content">
              <h3>{{ item.title }}</h3>
              <el-rate
                :value="item.rating.value / 2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
              <p>{{ item.info }}</p>
            </div>
          </li>
        </ul>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  created() {
    this.getBook();
  },
  data() {
    return {
      imgList: [],
      bookList: [],
      activeName: "book_fiction",
    };
  },
  methods: {
    getBook() {
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/" +
            this.activeName +
            "/items?start=0&count=8"
        )
        .then((res) => {
          this.bookList = res.data.subject_collection_items;
          this.imgList = this.bookList.map((item) => {
            return item.cover.url;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeList() {
      this.getBook();
    },
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
}
.book-item {
  display: flex;
  .img-box {
    flex: 3;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 5;
  }
}
</style>