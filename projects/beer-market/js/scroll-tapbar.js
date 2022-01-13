(function() {
    var last_pos = 0;
    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 60 && last_pos < $(this).scrollTop()) {
            $(".tap-bar").css('display', 'none');
        } else {
            $(".tap-bar").css('display', 'flex');
        }

        last_pos = $(this).scrollTop();
    });
})()