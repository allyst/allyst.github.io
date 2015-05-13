var $ = global.jQuery = require("./vendors/jquery");
var hljs = require('./vendors/highlight.pack.js');



$(function () {
    // инициализация подсветки синтаксиса
    hljs.initHighlightingOnLoad();
    initToggleCode();
});


function initToggleCode () {
    var btns = $('.js-lang-example');
    btns.on('click', function () {
        var pre = $(this).next('pre');
        pre.slideToggle(150);
    });
}





