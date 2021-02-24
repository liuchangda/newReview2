const db = require('../modules/db.js');

function time() {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
             resolve('/regist')
        }, 2000);
    })
}
module.exports = {
    login: async (ctx) => {
        //1.接收数据
        let user = ctx.request.body;//{ username: '12', password: '12' }
        //2.验证
        if (!user.username) {
            await ctx.render('index', {
                errMessage: '请输入用户名'
            })
        } else if (!user.password) {
            await ctx.render('index', {
                errMessage: '请输入密码'
            })
        } 
        // else {
        //     await ctx.render('blog')
        // }
        //3.连接数据库
        let res = await db.query('select * from t_user where username=? and password=?',[user.username,user.password]);
        if(res.length>0){
            await ctx.redirect('/blog/list')
        }else{
            await ctx.render('index',{
                errMessage:'用户名或密码不正确!'
            })
        }
        
    },
    regist: async (ctx) => {
        //1.接收数据
        let user = ctx.request.body;
        //2.验证
        //3.连接数据库
        //3.1 验证用户是否已存在
        let res = await db.query(`select * from t_user where username='${user.username}'`);
        if (res.length > 0) {
            await ctx.render("regist", {
                errMessage: "该用户已存在,换个名字试试吧!",
            });
            // await ctx.redirect('/regist');
        } else {
            //3.2将用户存入数据库
            let res = await db.query(`insert into t_user set?`, user)
            if (res.insertId) {
                await ctx.redirect('/');
            } else {
                await ctx.render("error", {
                    errMessage: "注册失败!",
                });
            }
        }

    }
}