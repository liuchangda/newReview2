<template>
  <div id="chat">
    <div class="box">
      <div class="chat-list">
        <div v-for="(item, index) in chatList" :key="index">
          <div class="question">
            <span>{{ item.question }}</span>
          </div>
          <div class="answer">
            <span>{{ item.answer }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-form">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="chatText" placeholder="请输入信息..."></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="sendMessage">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
export default {
  name: "chat",
  created() {
    // this.getSign({
    //   app_id: 2111982998,
    //   time_stamp: this.getTimeStamp(),
    //   nonce_str: this.getNonceStr(),
    //   session: "10000",
    //   question: "你叫啥",
    // });
    // this.sendMessage();
    // this.lazyLoad();
  },

  mounted() {
    this.scrollToBottom();
  },

  //每次页面渲染完之后滚动条在最底部
  updated() {
    this.scrollToBottom();
  },

  data() {
    return {
      chatText: "",
      chatList: [],
    };
  },
  methods: {
    //生成时间戳
    getTimeStamp() {
      let timer = new Date();
      timer = Date.parse(timer);
      timer = timer.toString().substr(0, 10);
      timer = Number.parseInt(timer);
      return timer;
    },
    //生成随机字符串
    getNonceStr() {
      let str = Math.random();
      str = str.toString(16);
      str = str.substr(2);
      return str;
    },
    //接口鉴权
    getSign(obj) {
      //1、将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表 N
      let N = Object.keys(obj); //返回一个数组
      N = N.sort();
      //2、将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
      let T = "";
      N.forEach((key) => {
        T += key + "=" + encodeURI(obj[key]) + "&"; //中文需要编码 英文不需要
      });
      //3、将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
      let S = "";
      S = T + "app_key=1c9jyvJi8JlP8Q0v";
      //4、对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名 (md5加密处理）
      S = md5(S).toUpperCase();
      return S;
    },
    //主
    sendMessage() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let requestUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let params = {
        app_id: 2111982998,
        time_stamp: this.getTimeStamp(),
        nonce_str: this.getNonceStr(),
        session: "10000",
        question: this.chatText,
      };
      params.sign = this.getSign(params);
      this.axios
        .get(baseUrl + requestUrl, { params })
        .then((res) => {
          this.chatList.push({
            question: this.chatText,
            answer: res.data.data.answer,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = document.documentElement;
        container.scrollTop = container.scrollHeight;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-form {
  position: fixed;
  bottom: 1rem;
  width: 100%;
  text-align: center;
  background: #fff;
}
.box{
  margin-bottom: 2rem;
}
.chat-list {
  margin: 20px;
  font-size: 0.28rem;
  .question {
    text-align: right;
    margin: 15px 0;
    span {
      padding: 5px;
      border-radius: 10px;
      background: rgb(240, 165, 234);
    }
  }
  .answer {
    text-align: left;
    span {
      padding: 5px;
      border-radius: 10px;
      background: rgb(133, 231, 248);
    }
  }
}
</style>