// 初始化banner
$(document).ready(function () {
    var width = $("body").width()
    if (width < 640) {
        $(".banner").find("video").hide()
        $(".banner").find("img").show()
    } else {
        $(".banner").find("video").show()
        $(".banner").find("img").hide()
    }
    $(window).resize(function () {
        var width = $("body").width()
        if (width <= 640) {
            $(".banner").find("video").hide()
            $(".banner").find("img").show()
        } else {
            $(".banner").find("video").show()
            $(".banner").find("img").hide()
        }
    })
});
// 判断时候支持
var test = !!(document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
if (test) {
    //alert("支持");
    $(".banner").find("video").show()
    $(".banner").find("img").hide()
} else {
    //alert("不支持");
    $(".banner").find("video").hide()
    $(".banner").find("img").show()
}
// 公司产品与服务hover效果
// 先遍历找类名，清空一边类名，然后经过谁给谁添加
// $(document).ready(function () {
//     $(".product-content>li").mouseover(function () {
//         $.each($(".product-content>li"), function () {
//             if ($(this).hasClass("active")) {
//                 $(this).removeClass("active")
//             }
//         })
//         $(this).addClass("active")
//     })
// });
$(document).ready(function () {
    $(".product-content>li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
//业务成果
$(document).ready(function () {
    $(".business-nav>li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active")
        var i = $(this).index()
        $(".trade-content>li").eq(i).addClass("show").siblings().removeClass("show")
    })
    $(document).ready(function () {
        $('#business-nav').niceScroll({
            cursorcolor: "#fff", //滚动条的颜色   
            cursoropacitymax: 0, //滚动条的透明度，从0-1   
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备   
            cursorwidth: "0", //滚动条的宽度   
            cursorborder: "0", // 游标边框css定义    
            cursorborderradius: "0", //以像素为光标边界半径  圆角   
            autohidemode: true, //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条   
            zindex: "auto", //给滚动条设置z-index值    
        });
    });
    $(document).ready(function () {
        // 点击一次获取一次scrollLeft的距离
        $(".business_btn_right").click(function(){
            var right = $("#business-nav").scrollLeft();
            right+=300
            $("#business-nav").scrollLeft(right)
        })
        $(".business_btn_left").click(function(){
            var left = $("#business-nav").scrollLeft();
            left-=300
            $("#business-nav").scrollLeft(left)
        })
    });
});