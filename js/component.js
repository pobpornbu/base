$(function() {

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

    // Adjust Font Size
    $(".js-btn-adjustfont").textresizer({
        target: "#js-text-resize",
        sizes:  [ "14px", "16px", "18px" ],
        selectedIndex: 0
    });
    $('#js-text-resize font, #js-text-resize span[style]').contents().unwrap();
 
})();