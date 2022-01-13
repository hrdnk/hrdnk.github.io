// nice select for select
    $(document).ready(function() {
        $('.card-info').niceSelect();
        $('.checkout-data-helper__button').on('mouseenter mouseleave', function(event){
            // detectTap = true;
            $('.checkout-data-helper__tooltip').toggleClass('show');
            if ($('.checkout-data-helper__tooltip').hasClass('show')) {
                detectTap = true;
                $(this).removeClass('show');
            }
        })
    });
// end nice select for select