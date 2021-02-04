// components/mCom/mCom.js
Component({
  options: {
    // styleIsolation: 'isolated',
    // styleIsolation: 'apply-shared',//页面样式影响组件样式
    styleIsolation: 'shared', //样式共享
    multipleSlots:true//多个slot选项打开
  },
  /**
   * 组件的属性列表
   */
  properties: {
    str:{
      type:String,
      value:'默认值'
    }
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('页面有组件');
    },
    detached: function () {
      console.log("页面无组件");
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.triggerEvent('myevent',{
        message:"触发并传参 提供给事件监听函数"
      })
    }
  }
})
