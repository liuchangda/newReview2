// miniprogram/pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str: 'hello world!',
    arr: ['a', 'b', 'c', 'd'],
    num: 0,
    objArr: [{
      name: 'aaa',
      age: 12
    }, {
      name: 'bbb',
      age: 12
    }]
  },
  goPage2(){
    // wx.navigateTo({
    //   url:'../page2/page2?id=1001'
    // })
    wx.switchTab({
      url: '../page2/page2?id=1001'
    })
    console.log(111);
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
    console.log("daodila");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})