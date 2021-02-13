require('./bootstrap');
require('./Material design');
window.Noty = require('noty');
Noty.overrideDefaults({
    layout: 'topRight',
    theme: 'bootstrap-v4',
    timeout: 3000
});


$(function () {
    $('nav i.fas').addClass('fa-fw mr-1');
});
