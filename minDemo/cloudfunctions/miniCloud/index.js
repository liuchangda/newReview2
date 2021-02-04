// 云函数入口文件//操作数据库的时候在这写
//依赖包，使当前的云函数支持小程序的语法
const cloud = require('wx-server-sdk')


//初始化云函数
cloud.init();
//初始化数据库【注意不用加wx.】
const db = cloud.database();
//拿到数据库中操作的集合
const miniDB = db.collection('miniDemoDb');



// 云函数入口函数
exports.main = async (event, context) => {
  //event接收的是前端传来的参数
  // console.log(event);

  // let result = await miniDB.get();

  let result = await miniDB.where({
    isShow: true
  }).update({
    data: {
      isShow: false
    }
  })

  //这里return什么 前端拿到的res就是什么
  //这里改动需要部署到云端
  return {
    result,
    // event,
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
    // msg:'hhhhpppphh'
  }
}