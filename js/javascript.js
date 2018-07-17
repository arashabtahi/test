$('#arrow').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });


$(window).resize(function(){
 if($(window).width()<991){
  $('.text-left').removeClass('text-left');
 }
});