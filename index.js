$('.row').click(function() {
    $('.flex-direction-content').css('flex-direction', 'row');
});

$('.row-r').click(function() {
    $('.flex-direction-content').css('flex-direction', 'row-reverse');
});

$('.column').click(function() {
    $('.flex-direction-content').css('flex-direction', 'column');
});

$('.column-r').click(function() {
    $('.flex-direction-content').css('flex-direction', 'column-reverse');
});

$('.nowrap').click(function() {
    $('.flex-wrap-content').css('flex-wrap', 'nowrap');
});

$('.wrap').click(function() {
    $('.flex-wrap-content').css('flex-wrap', 'wrap');
});

$('.wrap-r').click(function() {
    $('.flex-wrap-content').css('flex-wrap', 'wrap-reverse');
});

$('.flex-1').click(function() {
    $('.flex-card-1').css('flex', '1');
});

$('.flex-2-25px').click(function() {
    $('.flex-card-1').css('flex', '2 25px');
});

$('.flex-3-25px').click(function() {
    $('.flex-card-1').css('flex', '3 25px');
});


$( ".width-d" )
  .on( "change", function() {
    $("div:last-of-type .flex-direction-card").css('width', $( this ).val() + "%");
});

$( ".width-w" )
  .on( "change", function() {
    $("div:last-of-type .flex-wrap-card").css('width', $( this ).val() + "px");
});