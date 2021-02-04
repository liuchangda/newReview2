// miniprogram/pages/todolist/todolist.js
const db = wx.cloud.database();
const listDB = db.collection('todolist');
const _ = db.command;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    todoList: [],
    isDone: false,
    idList: [],
    isNonFin: 'true',
  },
  getValue(e) {
    // console.log(e.detail.value);
    this.setData({
      inputVal: e.detail.value,
    })
  },
  add() {
    listDB.add({
      data: {
        msg: this.data.inputVal,
        isDone: false
      }
    }).then(res => {
      // console.log(res);
      this.getToDoList();
    }).catch(err => { console.log(err); });
    this.setData({
      inputVal: ''
    })
  },
  getToDoList() {
    listDB.where({ isDone: this.data.isDone }).get()
      .then(res => {
        // console.log(res.data);
        this.setData({
          todoList: res.data
        })
      }).catch(err => { console.log(err); })
  },
  finish(e) {
    // console.log(e.target.dataset.id);
    listDB.doc(e.target.dataset.id).update({
      data: {
        isDone: true
      }
    })
    this.getToDoList();
  },
  del(e) {
    // console.log(e);
    listDB.doc(e.target.dataset.id).remove().then(res=>{
      console.log(res);
      this.getToDoList();
    }).catch(err=>{
      console.log(err);
    });
  },
  showChange() {
    this.setData({
      isDone: !this.data.isDone,
      isNonFin: !this.data.isNonFin
    })
    this.getToDoList();

  },
  selectChange(e) {
    this.setData({
      idList: e.detail.value
    })
    // listDB.where({ _id: _.in(e.detail.value) }).get().then(res => {
    //   console.log(res);
    // }).catch(err => { console.log(err); })

  },
  batchHandle(e) {
    // console.log(e.target.dataset.type);
    wx.cloud.callFunction({
      name: 'todolist',
      data: {
        idList: this.data.idList,
        type:e.target.dataset.type
      }
    }).then(res => {
      console.log(res);
      this.getToDoList();
    }).catch(err => { console.log(err); })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getToDoList();
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