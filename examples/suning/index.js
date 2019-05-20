// 导航栏tab切换
function tab() {
    $nav = $(".cate-detail");
    $lis = $("li", $nav);
    $tabs = $(".cate-content-part");

    $nav.on('mouseenter', 'li', function(e) {
        var idx = $(e.target).index()
        $tabs.eq(idx).stop().fadeIn()
        $tabs.eq(idx).siblings().stop().fadeOut()
    })
    $('.cate').hover( function(e) {
        $('.cate-content').fadeIn();
    },function() {
        // $('.cate-content').fadeOut()
    })
    $('.cate').on('click','.icon-close',function() {
        $('.cate-content').fadeOut()
    })
}

// 轮播图

$(function() {
    tab();
})