<template>
  <div>
    <p>count:{{ myCount }}</p>
    <p>count:{{$store.state.count}}</p>
    <p>count:{{count}}</p>
    <p>result:{{result}}</p>

    <!-- 子调用父亲的方法 -->
    <!-- <button @click="add1" >+1</button> -->
    <button @click="$store.commit('addFather')" >+1</button>
    <!-- 传参 -->
    <!-- <button @click="addNum(5)" >+5</button> -->
    <button @click="$store.commit('addNumFather',5)" >+5</button>
    <button @click="reduceFun" >-1</button>

  </div>
</template>

<script>
import { mapState,mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      myCount: this.$store.state.count,
    };
  },
  computed: {
      //对需要的state中的内容进行映射
      ...mapState(["count"]),
      ...mapGetters(['result'])
  },
  methods: {
      add1(){
        //this.myCount++;//这样不会修改公共组件的count值 只修改当前页面
        // this.$store.commit('addFather');
      },
      //如何向父组件传参？
      addNum(num){
          this.$store.commit('addNumFather',num)
      },
      ...mapActions(['reduceFun'])
  }
};
</script>

<style lang="scss" scoped>
</style>