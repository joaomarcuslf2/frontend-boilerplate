requirejs.config({
    paths: {
        jquery: './lib/jquery',
        angular: './lib/angular',
        angular: './lib/bootstrap'
    }, shim: {
        'angular' : {'exports' : 'angular'},
        'jquery': {'exports' : 'jquery'},
        'bootstrap' : {'exports' : 'bootstrap', deps: ['jquery']}
    }   
});
define(['jquery', 'angular', 'modules/mainApp'], 
    require(['jquery'], function($) {
    $(document).ready(function(){
        require(['angular', "app"], function(){
         angular.bootstrap(document, ['app']);
        })
    })
});
});