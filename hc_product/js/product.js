// 数字化转型基座
$(document).ready(function () {
    $(".hc_block_1 .tab li").mouseover(function(){
        var index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $(".hc_block_1 .tab_contact li").eq(index).addClass("show").siblings().removeClass("show")
    })
});
// 未来工厂建设
$(document).ready(function () {
    $(".hc_block_2_main_l .tab li").mouseover(function(){
        var index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $(".hc_block_2 .tab_contact li").eq(index).addClass("show").siblings().removeClass("show")
    })
});