$('#next-step').on('click', function(){

    $("#one-step").hide();
    $("#two-step").show();

});

$('#prev-step').on('click', function(){

    $("#two-step").hide();
    $("#one-step").show();

});