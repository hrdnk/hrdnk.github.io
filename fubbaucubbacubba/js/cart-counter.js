
var num = document.getElementById('sub-cart__num'),
count = 0;
$('.add-cart').on('click', function(){
    count += 1;
    num.innerHTML = "" + count;

    $(num).removeClass('pulse');
    void num.offsetWidth;
    $(num).addClass('pulse');

    if(!$(".sub-cart--active").hasClass("show")){
        $(".sub-cart--active").addClass("show");
    }
    
    setTimeout(function () {        
        if(!$(".sub-cart__button").hasClass("shadow")){
            $(".sub-cart__button").addClass("shadow");
        }
    }, 1000);

})
