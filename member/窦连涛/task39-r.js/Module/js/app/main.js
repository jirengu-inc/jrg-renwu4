//   main.js 相对于index.html
//   build.js 相当于自身而言
requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'com/jquery.min'
    }
});

requirejs(['app/index'])
