function hideScroll() {
    document.body.classList.add('no-scroll');

    document.body._scrollTop = window.pageYOffset;
    if (document.body._hasScrollbar) {
        document.body.style.width = `calc(100% - ${document.body._getScrollbarSize()}px)`;
    } else {
        document.body.style.width = '100%';
    }
    document.body.style.top = -document.body._scrollTop + 'px';
}

function _getScrollbarSize() {
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    let widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    let widthWithScroll = inner.offsetWidth;

    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

function _hasScrollbar() {
    return document.body.scrollHeight > document.body.clientHeight;
}

function showScroll() {
    document.body.classList.remove('no-scroll');

    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scroll(0, document.body._scrollTop);
}


$('.catalog-list__item').on('click', function(){
    $('.catalog-card').addClass('card-active');
    // $('body').addClass('no-scroll');
    hideScroll();
});

$('.catalog-card__close').on('click', function(){
    $('.catalog-card').removeClass('card-active');
    showScroll();
    // $('body').removeClass('no-scroll');
});

$(document).click(function(event) {
if (!$(event.target).closest('.catalog,.catalog-card__close').length) {
    $('body').find('.catalog-card').removeClass('card-active');
    showScroll();
}
});