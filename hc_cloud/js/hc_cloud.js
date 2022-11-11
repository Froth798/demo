$(document).ready(function () {
    // 技术创新 & 安全防护
    $(".hc_block2-main").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
});
// 社会奉献
$(document).ready(function () {
    $(".hc_block5_content ul li").mouseover(function(){
        $.each($(".hc_block5_content ul li"),function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active")
            }
        })
        $(this).addClass("active")
    })
});