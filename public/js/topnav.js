// 大屏导航下拉菜单hover效果
$(document).ready(function () {
    $("#navbar_ul>li").hover(function () {
        $(this).find("div").stop(true, false).slideDown()
    }, function () {
        $(this).find("div").stop(true, false).slideUp()
    })
    $(".search").click(function () { // 搜索框效果
        $(this).toggleClass("search_show")
        $(this).find(".search-img").toggle()
        $(this).siblings(".Search_box").toggleClass("Search_box-show")
    })
});
// 大屏导航
$(document).ready(function () {
    var searchBtn = $(".search")
    var Search_box = $(".Search_box")
    $(".max-nav").hover(function () {
        $(this).addClass("hover-bg") // 添加背景
        $(this).find(".logo").find(".logo1").hide().siblings().show(); // 蓝色logo显示
        searchBtn.find(".search2").css("display", "block").siblings().hide(); // 蓝色搜索图标显示
        Search_box.find(".search2").css("display", "block").siblings().hide(); // 蓝色搜索图标显示
        Search_box.find("input").addClass("col-bor")
    }, function () {
        $(this).removeClass("hover-bg") // 移除类名
        Search_box.find("input").removeClass("col-bor")
        $(this).find(".logo").find(".logo1").show().siblings().hide();// 白色logo显示
        searchBtn.find(".search2").css("display", "none").siblings().show() // 白色搜索图标显示
        Search_box.find(".search2").css("display", "none").siblings().show() // 白色搜索图标显示
        if ($(".max-nav").hasClass("top-bg")) { // 判断是不是有top-bg类名
            $(this).find(".logo").find(".logo1").hide().siblings().show(); // 显示蓝色logo
            searchBtn.find(".search2").css("display", "block").siblings().hide()
            Search_box.find(".search2").css("display", "block").siblings().hide()
            Search_box.find("input").addClass("col-bor")
        }
    });
    $(window).scroll(function () { // 滑动事件
        var max_nav = $(".max-nav") // 大屏导航
        var searchBtn = $(".search") // 搜索按钮
        var Search_box = $(".Search_box") // 搜索框
        function blueIcon_show() {
            max_nav.find(".logo").find(".logo1").hide().siblings().show(); // 白色logo颜色变蓝色
            searchBtn.find(".search2").css("display", "block").siblings().hide(); //搜索框内的搜索按钮图标 白色搜索图标隐藏显示蓝色
            Search_box.find(".search2").css("display", "block").siblings().hide(); //搜索框内的搜索按钮图标
            Search_box.find("input").addClass("col-bor"); // 改变搜索框线条颜色
        }
        if ($(this).scrollTop() >= 100) {
            $(".max-nav").addClass("top-bg") // 添加类名
            //if (max_nav.hasClass("top-bg")) {
                blueIcon_show()
            //}
            max_nav.find(".navbar").find("a").addClass("col"); // col改变字体颜色
        }
        if ($(this).scrollTop() == 0) {
            max_nav.removeClass("top-bg")
            Search_box.find("input").removeClass("col-bor")
            if (max_nav.hasClass("top-bg")) { // 判断类名有没有没移除，下面代码注销的话会发生我导航到达顶部之后样式还在所以要判断一下把类名移除
                blueIcon_show()
            } else {
                max_nav.find(".logo").find(".logo1").show().siblings().hide();
                searchBtn.find(".search2").css("display", "none").siblings().show();
                Search_box.find(".search2").css("display", "none").siblings().show();
                Search_box.find("input").removeClass("col-bor");
            }
            if (max_nav.hasClass("hover-bg")) { // 注销之后可以看到效果
                blueIcon_show()
            }
            max_nav.find(".navbar").find("a").removeClass("col");
        }
    })
});
// 小屏幕导航
$(document).ready(function () {
    $(".min-nav").hover(function () {
        $(this).addClass("hover-bg") // 添加背景
        $(this).find(".logo").find(".logo1").hide().siblings().show(); // 蓝色logo显示
    }, function () {
        $(this).removeClass("hover-bg") // 移除类名
        $(this).find(".logo").find(".logo1").show().siblings().hide();// 白色logo显示
        // 没有以下两步就会出错
        if ($(".min-nav").hasClass("top-bg")) { // 判断是不是有top-bg类名
            $(this).find(".logo").find(".logo1").hide().siblings().show(); // 显示蓝色logo
        }
        if($(".min-nav").hasClass("click-bg")){ 
            $(this).find(".logo").find(".logo1").hide().siblings().show(); // 显示蓝色logo
        }
    });
    var min_nav = $(".min-nav")
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            min_nav.addClass("top-bg")
            min_nav.find(".logo1").hide().siblings().show() // 蓝色logo显示
            $(".nav-btn").children("span").addClass("span-bg-top"); // 滚动的时候改变线条颜色
            if ($(".min-nav").hasClass("top-bg")) {
                $(".min-nav").find(".logo1").hide().siblings().show();
            } else {
                $(".min-nav").find(".logo1").show().siblings().hide();
            }
        } else {
            $(".nav-btn").children("span").removeClass("span-bg-top"); // 小于100，删除span的颜色效果
        }
        if ($(this).scrollTop() == 0) {
            min_nav.removeClass("top-bg")
            min_nav.find(".logo1").show().siblings().hide() // 白色logo显示
            if ($(".min-nav").hasClass("click-bg")) { // 判断是否有点击的样式类名
                $(".min-nav").find(".logo1").hide().siblings().show(); // 蓝
            } else {
                $(".min-nav").find(".logo1").show().siblings().hide(); // 白
            }
        }
    })
    // 点击导航按钮显示菜单
    $(".nav-btn").click(function () {
        var min_nav = $(".min-nav")
        min_nav.toggleClass("click-bg"); // 点击事件类名
        $(this).toggleClass("active"); // 三个线条变两个
        $(".nav-pull-down").stop(this.false).slideToggle(); // 小屏幕导航下拉
        if (min_nav.hasClass("click-bg")) {
            min_nav.find(".logo1").hide().siblings().show();
            $(this).find("span").addClass("span-bg-click") // 点击按钮按钮一直变成黑色
        } else {
            min_nav.find(".logo1").show().siblings().hide();
            $(this).find("span").removeClass("span-bg-click")
        }
        if ($(".min-nav").hasClass("top-bg")) { // 判断是不是回到了顶部，回到顶部之后要把按钮的颜色
            $(this).find("span").addClass("span-bg-top")
            min_nav.find(".logo1").hide().siblings().show();
        } else {
            $(this).find("span").removeClass("span-bg-top")
        }
    })
    //点击导航显示子菜单
    $("#pull-down-ul>li").click(function () {
        // 判断下面的ul是不是显示，如果是显示，再去添加事件让ul去折叠
        var down = $(this).children(".down-ul-sub").css("display")
        if (down == "none") {
            $(this).children(".down-ul-sub").slideDown().parents("li").siblings().children(".down-ul-sub").slideUp();
            $(this).children(".pull-down-ul li span").addClass("rot").parents("li").siblings().children(".pull-down-ul li span").removeClass("rot");
        } else {
            $(this).children(".down-ul-sub").slideUp();
            $(this).children(".pull-down-ul li span").removeClass("rot");
        }
    })
});