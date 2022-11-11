// 发展历程
$(document).ready(function () {
    // 点击
    var reduce = $(".course-date>ul").position().top
    $(".course-date-up").click(function(){
        reduce-=112
        if(reduce<= -1120){
            reduce= -1120
        }
        $(".course-date>ul").css("top",reduce+"px")
        $(".course-text>ul").css("top",reduce+"px")
        //console.log(reduce);
    })
    $(".course-date-down").click(function(){
        reduce+=112
        if(reduce>= 224){
            reduce= 224
        }
        $(".course-date>ul").css("top",reduce+"px")
        $(".course-text>ul").css("top",reduce+"px")
        //console.log(reduce);
    })
});