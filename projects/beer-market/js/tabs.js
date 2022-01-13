$(".catalog .catalog-nav__item").click(function() {
    $(".catalog .catalog-nav__item a").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".content .tap-menu__item").click(function() {
    $(".content .tap-menu__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".section").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");