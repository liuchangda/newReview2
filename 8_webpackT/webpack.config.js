const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
/* 加载一个插件 1、这里就引入一个 2、plugins数字里引入一个new一个 */

module.exports = {
    //开发环境配置 production:生产环境(线上) development:开发环境(开发)
    mode: 'development',
    //入口文件的配置项
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'

    },
    //出口文件的配置项
    output: {
        //必须是绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:8083/'
    },
    //设置热更新
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的ip地址，可以使用ip也可以使用localhost
        host: 'localhost',
        //配置服务端口号
        port: 8083,
        open: true
    },
    plugins: [
        /* 处理html文件的打包 */
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace:true
            },
            hash: true,
        }),
        //每次构建先删除dist 再重新打包dist文件夹
        // new CleanWebpackPlugin(),

        new miniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    //模块：配置loader 例如解读css
    module: {
        rules: [
            {
                /* 针对css处理规则 *///设置识别哪些文件
                test: /\.css$/,
                //先使用的放在后面 
                // use:['style-loader','css-loader'],
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{importLoaders:1}
                    },
                    'postcss-loader'
                ]
            }, {
                /* 针对图片文件的处理规则 */
                test: /\.png|jpg|gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500,
                            outputPath: 'images/',
                            esModule: false
                        }
                    }
                ]
            }, {
                /* 针对html中的图片的处理 */
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }, {
                /* 针对sass的处理 */
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },{
                /* 针对js文件的处理 (es6)=>(es5) */
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ],
                exclude:/node-modules/
            }
        ]
    }
}