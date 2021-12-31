
var num = document.getElementById('sub-cart__num'),
count = 0;
$('.add-cart').on('click', function(e){
    count += 1;
    num.innerHTML = "" + count;

    $('.sub-cart__num').addClass('pulse');
    setTimeout(function () {
        $('.sub-cart__num').removeClass('pulse');
        
        if(!$(".sub-cart__button").hasClass("shadow")){
            $(".sub-cart__button").addClass("shadow");
        }
    }, 1000);

})
