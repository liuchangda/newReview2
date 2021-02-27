const model = require('../model/userM');

module.exports = {
    regist: async (ctx) => {
        //1.接收表单数据
        let user = ctx.request.body;
        //2.验证
        if (user.username == '') {
            await ctx.render('error', {
                message: '请输入用户名！'
            })
        }
        //3.验证用户名在数据库是中是否已存在
        let res = await model.getByName(user.username);
        if (res.length > 0) {
            await ctx.render('error', {
                message: '用户名已存在！'
            })
        } else {
            //3.2 将用户名存入数据库
            let res = await model.saveUser(user);
            console.log(res);
            if (res.affectedRows > 0) {
                await ctx.redirect('/user/login')
            } else {
                await ctx.render('error', {
                    message: '注册失败'
                })
            }
        }

    },
    login: async (ctx) => {
        //1.接收表单数据
        let user = ctx.request.body;
        console.log('表单数据：', user);
        // 2.简单验证
        if (user.username == '' || user.password == '') {
            await ctx.render('error', {
                message: '用户名或密码为空'
            })
        } else {
            //3.连接数据库验证用户是否存在
            let res = await model.getUserByNameAndPwd(user);
            console.log('用户是否存在验证:', res);
            if (res.length > 0) {
                ctx.session.username = user.username;
                ctx.session.userId = res[0].user_id
                await ctx.redirect('/')
            } else {
                await ctx.render('error', {
                    message: '用户名或密码不正确'
                })
            }
        }
    }
}