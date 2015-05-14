$(function() {

	// Textarea
	autosize($('textarea'));
	$('.js-comment-textarea').on('focus', function() {
		$(this).parent().toggleClass('active');
	});

	// Dropdown
	$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select__wrap"></div>');
    $this.after('<div class="select__selected"></div>');

    var $styledSelect = $this.next('div.select__selected');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select__options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li').addClass('select__option');
  
    // $styledSelect.click(function(e) {
    //     e.stopPropagation();
    //     $('div.select__selected.active').each(function(){
    //         $(this).removeClass('active').next('ul.select__options').hide();
    //     });
    //     // $(this).toggleClass('active').next('ul.select__options').toggle();
    //     if($(this).hasClass('active')){
    //     	$(this).css("background","red");
    //     }else{
    //     	$(this).css("background","black");
    //     	$(this).addClass('active');
    //     }
    // });

		$styledSelect.on("click", function(e){
        e.stopPropagation();
        $('.select__selected.active').each(function(){
            $(this).removeClass('active').next('ul.select__options').hide();
        });
        // $(this).toggleClass('active').next('ul.select__options').toggle();
        // if($(this).is('.active')){
        	// $(this).css("color","red");
        	// $(this).removeClass('active');
        // }else{
        	// $(this).css("background","black");
        	$(this).addClass('active').next('ul.select__options').show();
        //}
		});

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

	});
});