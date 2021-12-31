// nice select for select
    $(document).ready(function() {
        $('.card-info').niceSelect();
        $('.checkout-data-helper__button').hover(function(){
            $('.checkout-data-helper__tooltip').toggleClass('show')
            $('.checkout-data-helper__button').on('touchstart touchend', function(event) {
                // e.preventDefault();
                event.stopPropagation();
                $('.checkout-data-helper__tooltip').toggleClass('show');
            });
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