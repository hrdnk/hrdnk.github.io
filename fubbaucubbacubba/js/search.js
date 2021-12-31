
// mobile search
$('.mobile-search__button').on('click', function(){
    $('.mobile-search__panel').toggleClass('open');
    $('.mobile-search__input').val('');
    $('.mobile-search__result').removeClass('open');
})

jQuery(document).ready(function($){

    $('.mobile-search__result li').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    
    $('.mobile-search__input').on('keyup', function(){
        $('.mobile-search__result').addClass('open');
    
    var searchTerm = $(this).val().toLowerCase();
    
        $('.mobile-search__result li').each(function(){
    
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
    
        });
    
    });
    
});
// end mobile search

// desktop search
$('.sub-search__input').click(function() {
    $(this).parent().addClass('focused');

    $(this).on('blur', function(){
        $(this).parent().removeClass('focused');
    });

    if ($(this).parent().hasClass('focused')) {
        // $(this).parent().addClass('focused'); 
        
    }

});
// end desktop search