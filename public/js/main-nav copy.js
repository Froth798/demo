// main-nav
$(document).ready(function () {
    var height = $(".main-nav").height();
    var top = $(".main-nav").offset().top - height
    var resizeTop = top
    $(window).resize(function(){
        height = $(".main-nav").height()
        resizeTop = $(".main-nav").offset().top - height 
        console.log(resizeTop);
        $(window).scroll(function(){
            //console.log("滚动"+ $(this).scrollTop());
            if($(this).scrollTop()>=resizeTop){
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
        console.log(resizeTop);
        //console.log("滚动"+ $(this).scrollTop());
        if($(this).scrollTop()>=resizeTop){
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