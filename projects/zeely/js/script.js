    $(document).ready(function() {
        $('select').niceSelect();
    });

    $('input[type=text]').keyup(function() {
        //var $this = $( this );
        if( $(this).val() != '' ) {
            $('.btn').removeClass('btn--disable')
    }
        //$('.btn').removeClass('btn--disable')
    });

  
function move() {
    var curIdxPb = 0;
    $('.progress-line').val( function(i, oldval) {
        if (curIdxPb == i) {
          if (oldval >= this.max)
            curIdxPb++;
          return 50 + oldval;
        } 
    });
}

$('.btn').on('click', function(){

    $("#step1").hide();
    $("#step2").show();
    move()

});


$("#start").click(function(){
    $(".begin").hide(100);
    $(".multi-step").show();
    $("#step1").show();
});

$('input').on('focus', function(){
  // replace CSS font-size with 16px to disable auto zoom on iOS
  $(this).data('fontSize', $(this).css('font-size')).css('font-size', '16px');
}).on('blur', function(){
  // put back the CSS font-size
  $(this).css('font-size', $(this).data('fontSize'));
});