$(document).ready(function(){
    let modalOpen = $('[data-toggle=modal]');
    let modal = $('.modal');
    
    
    modalOpen.on('click', function openModal(e) {
        e.preventDefault();
        modal.toggleClass('modal_visible')
        $('body').toggleClass('no-scroll')
    })
    
});
$("#modal").click(function(ev){
    if(ev.target != this) return;
    $('.modal_visible').removeClass('modal_visible');
    $('body').removeClass('no-scroll')
  });

$(document).ready(function(){
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
                $('body').toggleClass('no-scroll');
			}
			else {
				$('.mainMenu').removeClass('act');
                $('body').removeClass('no-scroll');
			}
	});
});