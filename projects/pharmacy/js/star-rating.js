// product page
var $star_rating = $('.product__rating .far');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('far','fa-star').addClass('fas', 'fa-star');
    } else {
      return $(this).removeClass('fas', 'fa-star').addClass('far','fa-star');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});
// end product page

// modal review
var $star_rating = $('.rating .far');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('far','fa-star').addClass('fas', 'fa-star');
    } else {
      return $(this).removeClass('fas', 'fa-star').addClass('far','fa-star');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});
// end modal review