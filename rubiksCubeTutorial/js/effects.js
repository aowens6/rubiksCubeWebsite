$(function() {
    
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           //$(window).unbind('scroll');
           
           
           $('.bottomLink').css({
               opacity: 0,
                position: 'relative',
                left: -600}).animate({opacity: 1, left: 20, zIndex: 1}, 2000, 'easeOutQuad');
                
           
       }
    });
    
});
