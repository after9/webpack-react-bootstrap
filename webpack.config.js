/**
 * Created by Ron on 16/2/27.
 */
var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry:[
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    modulesDirectories: [
        'node_modules'
    ],
    //externals: {
    //    'react': 'React',
    //    'react-dom': 'ReactDOM',
    //    'jquery': 'jQuery'
    //},
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            },
            {
                // A regexp to test the require path. accepts either js or jsx
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                // The module to load. "babel" is short for "babel-loader"
                loader: 'babel',
                query:{
                    presets: ['es2015', 'react']
                }
            },
            {
                /** 使用url-loader处理图片文件 **/
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            },
            {
                /** 使用url-loader处理文字文件 **/
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, 'app/scss'),
            path.resolve(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
        ],
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['node_modules'],
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx'],
        //alias: {
        //    jquery: "node_modules/jquery/src/jquery"
        //}
    },
    devServer: {
        contentBase: "./build"
    },
    plugins: [
        //把jquery变量注入全局
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
};

