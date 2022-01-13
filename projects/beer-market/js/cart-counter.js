var num = document.getElementById('cart__num'),
count = 0;
$('.btn-buy').on('click', function(){
    count += 1;
    num.innerHTML = " " + count;
})
