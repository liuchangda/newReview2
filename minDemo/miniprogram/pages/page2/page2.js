// miniprogram/pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },
  add(e){
    // console.log(e);
    // console.log(e.target.dataset.step);
    // this.setData({
    //   num:this.data.num+1,
    // })
    this.setData({
      num: this.data.num + e.target.dataset.step,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过options获得页面参数
    // console.log(options);
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