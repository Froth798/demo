$(document).ready(function () {
    var wow = new WOW({
        boxClass: 'wow', // default 盒子类名
        animateClass: 'animated', // default 为animate.css触发css动画的库
        offset: 0, // default 偏移量
        mobile: true, // default 是否支持手机
        live: true // default 检查新元素
    });
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        wow.init(); // 初始化wow插件
    };
});