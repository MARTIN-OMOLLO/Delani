$(document).ready(function(){
    
})
$(document).ready(function() {
    $('.Wedo').hover();
    $('Wedo').animate({
        opacity:1
    });
    $('Wedo').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.Wedo').fadeIn();
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.Wedo').fadeOut();
    });
});