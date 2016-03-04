webpack-react-bootstrap
=================

This is an bootstrap/react sample with webpack.

The bootstrap is the `sass` version from [here](https://github.com/twbs/bootstrap-sass). 

Install
-----
Just run `npm install` is ok.

*Note: npm 需要使用v5.0.0以上, 否则不能支持某些loader(例如:sass-loader)*

Usage
-----

Some sass/css/fonts that needed by Bootstrap, have been configured the correct loaders in `webpack.config.js`, you can modify or add loader that you need on it.
 
 Example:

``` javascript
module.exports = {
  module: {
    loaders: [
        {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        },
    ]
  }
};
```

Bootstrap javascript components depends on jQuery.
We add the jQuery to global namespace in webpack app by the following code in `webpack.config.js`:

``` javascript
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
]
```

Custom
-----

You can set your private variables in the following file:

* `app/scss/_avriables.scss`


Enjoy!
-----

Run `npm run dev` and open [http://localhost:8080/](http://localhost:8080/)