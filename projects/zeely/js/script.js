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

    move()

});

