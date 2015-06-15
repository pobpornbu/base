(function($) {

    // Textarea
    autosize($('textarea'));
    $('.js-comment-textarea').on('focus', function() {
    	$(this).parent().toggleClass('active');
    });

    // Tab
    $('#myTab').on('click', 'a', function(e) {
      e.preventDefault();
      $(this).tab('show');
    //   $(this).toggleClass('focus');
    //   $(this).css('background', 'red');
    // });//.on('click', 'li', function(){
        //$(this).removeClass('active');
    });
    
})(jQuery);