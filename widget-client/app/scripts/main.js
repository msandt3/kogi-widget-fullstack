require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        widget: 'http://localhost:3000/widget',
        handlebars: '../bower_components/handlebars/handlebars',
        underscore: '../bower_components/underscore/underscore'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
});