// 合作伙伴
$(document).ready(function () {
    var index = 0
    $(".hc_block_2 .btn_up").click(function(){
        index--;
        if(index<0){
            index=2
        }
        $(".hc_block_2 .banner li").eq(index).addClass("show").siblings().removeClass("show")
    })
    $(".hc_block_2 .btn_down").click(function(){
        index++;
        if(index>2){
            index=0
        }
        console.log(index);
        $(".hc_block_2 .banner li").eq(index).addClass("show").siblings().removeClass("show")
    })
});
