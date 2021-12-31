// nice select for select
$(document).ready(function() {
    $('.card-info').niceSelect();
    $('.checkout-data-helper__button').on('mouseenter mouseleave touchstart', function(event){
        // detectTap = true;
        $('.checkout-data-helper__tooltip').toggleClass('show');
        if (event.type == "touchend") detectTap = true; // Detects click events
        if (detectTap){
           // Here you can write the function or codes you want to execute on tap
           $('.checkout-data-helper__tooltip').removeClass('show');
        }
    })
});
// end nice select for select

// form validation
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
// end form validation