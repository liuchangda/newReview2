// miniprogram/pages/page6/page6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:''
  },

  chooseImg(){
    wx.chooseImage({
      success:(res)=>{
        this.setData({
          imgUrl: res.tempFilePaths[0]
        })
        // console.log(res.tempFilePaths[0]);
      }
    })
    console.log(this.data.imgUrl);
  },
  uploadImg(){
    console.log('进来了');
    wx.cloud.uploadFile({
      cloudPath: 'miniDemo/'+Date.parse(new Date()) +'.'+ this.data.imgUrl.replace(/.+\./,''), // 上传至云端的路径
      filePath: this.data.imgUrl, // 小程序临时文件路径
      success: res => {
        console.log(res)
      },
      fail: console.error
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