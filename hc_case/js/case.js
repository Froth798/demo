// 行业赋能案例
$(document).ready(function () {
    $("#hc_block_1_tab_1>li").mouseover(function(){
        var index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $("#hc_block_1_tabcontent_1>li").eq(index).addClass("show").siblings().removeClass("show")
    })
});
// 区域产业案例
$(document).ready(function () {
    $("#hc_block_1_tab_2>li").mouseover(function(){
        var index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $("#hc_block_1_tabcontent_2>li").eq(index).addClass("show").siblings().removeClass("show")
    })
});