// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init()

const db = cloud.database();
const listDB = db.collection('todolist');
const _ = db.command;



// 云函数入口函数
exports.main = async (event) => {
  // let idList = event.idList;
  if (event.type == 'finish') {
    return await listDB.where({
      _id: _.in(event.idList)
    }).update({
      data: {
        isDone: true
      }
    })
  }
  else{
    return await listDB.where({
      _id:_.in(event.idList)
    }).remove()
  }

  return {
    event,
    // idList
  }
}