<template>
  <div>
    <aplayer @listShow="switchSong" :audio="audio" :lrcType="3" />
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer);

export default {
  name: "Music",
  created() {
    this.getPlayList();
  },
  data() {
    return {
      audio: [],
      playList: [],
      mp3Url: "",
    };
  },
  methods: {
    /*ajax请求 异步操作 -> 放在异步队列里 -> but return是同步的 -> 先return了 数据后来才回来 ->return为空
    
    */
    getPlayList() {
      this.axios
        .get("https://bird.ioliu.cn/netease/playlist", {
          params: {
            id: 597592921,
          },
        })
        .then( async (res) => {
          this.playList = res.data.playlist.tracks;
          this.audio = this.playList.map((item,index) => {
            this.getSong(item.id,index);
            return {
              name: item.name,
              artist: item.ar[0].name,
                url: this.mp3Url,//''
              cover:'https://images.weserv.nl/?url='+ item.al.picUrl, // prettier-ignore
              //   lrc: "",
              id: item.id,
            };
          });
          // console.log(res.data.playlist.tracks);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSong(id,index) {
      this.axios
        .get("https://bird.ioliu.cn/netease/song?id=" + id)
        .then((res) => {
          this.audio[index].url = res.data.data.mp3.url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    switchSong() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>