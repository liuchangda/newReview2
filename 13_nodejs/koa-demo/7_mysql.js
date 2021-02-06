const Koa = require('koa') //没有路径 默认在node_modules中查找 默认加载js的主入口文件
const Router = require('@koa/router');
const mysql = require('mysql');
//ejs模板引擎
const views = require('koa-views');
const path = require('path');

const app = new Koa();
const router = new Router();

//加载模板引擎
app.use(views(path.join(__dirname, '/views')), {
    extension: 'ejs'
})


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog-demo'
});


function getUser(sql) {
    return new Promise((resolve,reject)=>{
        connection.query(sql, function (error, results) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results)
            }
        });
    })
}

router.get('/', async (ctx) => {
    let results = await getUser('select * from t_user');

    await ctx.render('users.ejs', {
        users: results
    })
})

/* 键值对+query */
router.get('/userDetail',async (ctx)=>{
    let query = ctx.query;//{ userId: '1' }
    console.log(query);
    let result = await getUser('select * from t_user where user_id=' + query.userId)
    await ctx.render('userDetail.ejs',{
        user:result[0]
    })
    
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(8080)
console.log('[demo] start-quick is starting at port 80')