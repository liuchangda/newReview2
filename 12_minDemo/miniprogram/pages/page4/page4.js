// miniprogram/pages/page4/page4.js
const db = wx.cloud.database();
const miniDb = db.collection('miniDemoDb');//获取要操作的数据库中的集合
const _ = db.command;//获取查询指令

Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:''
  },
  //js操作数据库
  addDB(){
    //数据库 -> 增
    miniDb.add({
      data:{
        msg:this.data.msg,
        isShow:true
      }
    }).then(res=>{
      console.log(res);
    })
  },
  getDB(){
    //获取集合中全部数据
    miniDb.get().then(res=>{
      console.log(res);
    })
    
    //获取集合中部分数据
    // miniDb.where({
    //   isShow:true
    // }).get().then(res=>{
    //   console.log(res);
    // })

    //
    // miniDb.where({
    //   msg:_.in(['hello','world'])
    // }).get().then(res=>{console.log(res);})

    //获取某一个数据
    // miniDb.doc('79550af26016216e01cf1a0d55f6ebc7').get().then(res=>{
    //   console.log(res);
    // })
  },
  updateDB(){
    miniDb.doc('79550af26016216e01cf1a0d55f6ebc7').update({
      data:{
        isShow:false
      }
    }).then(res=>{console.log(res);})
  },
  delDB() {
    miniDb.doc('79550af26016216e01cf1a0d55f6ebc7').remove().then(res => { console.log(res); })
  },
  getValue(e){
    // console.log(e.detail.value);
    this.setData({
      msg:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})