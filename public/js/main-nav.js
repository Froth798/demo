// main-nav
$(document).ready(function () {
    // 导航要固定的位置其实就是banner的高度加上main-nav的高度，如果这里使用
    // 偏移的话获取的数值不准确，因为当我鼠标滚动的距离达到main-nav的时候，
    // main-nav就被固定定位到我们的屏幕，
    var banner_h = $(".banner").height();
    var main_nav_h = $(".main-nav").height();
    var top = parseInt(banner_h) - parseInt(main_nav_h) 
    $(window).resize(function(){
        var height = $(".banner").height() - main_nav_h;
        $(window).scroll(function(){
            if($(this).scrollTop()>=height){
                $(".main-nav").addClass("active")
            }else{
                $(".main-nav").removeClass("active")                         
            }
            if($(".main-nav").hasClass("active")){
                $(".hc_block_1").addClass("active-margin")
            }else{
                $(".hc_block_1").removeClass("active-margin")
            } 
        })    
    })
    $(window).scroll(function(){
        if($(this).scrollTop()>=top){
            $(".main-nav").addClass("active")
        }else{
            $(".main-nav").removeClass("active")
        }
        if($(".main-nav").hasClass("active")){
            $(".hc_block_1").addClass("active-margin")
        }else{
            $(".hc_block_1").removeClass("active-margin")
        }
    })
});