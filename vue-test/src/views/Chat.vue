<template>
  <div>聊天</div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        app_id: 2111982998,
        time_stamp: this.getTimeStamp(),
        nonce_str: this.getNonceStr(),
        session:'10000',
        question:'你叫啥',
      },
    };
  },
  methods: {
    //生成时间戳
    getTimeStamp() {
        let timer = new Date();
        timer = Date.parse(timer);
        timer = timer.toString().substr(0,10);
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
    //接口
    getSign(){
        
    },
    sendMessage() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let requestUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      this.axios.get(baseUrl + requestUrl, { params });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>