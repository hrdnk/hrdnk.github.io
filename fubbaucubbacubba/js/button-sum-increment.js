$('.btn-sum__add').click(function () {
    $(this).prev().text(+$(this).prev().text() + 1);
});
$('.btn-sum__remove').click(function () {
    if ($(this).next().text() > 0) $(this).next().text(+$(this).next().text() - 1);
});