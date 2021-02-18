const model = require('../modules/userModel')

module.exports = {
    async login(ctx) {
        // console.log(ctx.request.body);
        // 1.获取表单数据
        let { username, password } = ctx.request.body;
        // 2.安全验证
        // 3.连接数据库
        // let results = await db.query(`SELECT * FROM t_user where username='${username}' and password = '${password}'`);
        let results = await model.getUserByNameAndPwd(username, password);

        // 4.根据查询结果跳转（或输出）不同的结果页面
        if (results.length > 0) {
            ctx.session.loginUser = username;
            await ctx.redirect('/');
            
        } else {
            // ctx.body = '登录失败，用户名或密码不正确';
            await ctx.render('error', {
                message: '登录失败，用户名或密码不正确'
            })
        }

    },
    async saveUser(ctx) {
        // 1.获取表单数据
        let { username, password, nickname } = ctx.request.body;
        // 2.安全验证
        if (username.trim().length == 0) {
            await ctx.render('error', { message: '用户名不能为空' });
        } else {
            // 3.连接数据库
            let results = await model.saveUser({ username, password, nickname });
            // console.log(results);
            // 4.根据查询结果跳转（或输出）不同的结果页面
            if (results.insertId) {
                await ctx.redirect('/login')
                //await ctx.render('login');//render的第一个参数是渲染的ejs文件名，第二个是对象传递的参数
            } else {
                await ctx.render('error', {
                    message: '注冊失敗'
                })
            }
        }
    }
}