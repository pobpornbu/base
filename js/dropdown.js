
// Dropdown 
function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$('.js-dropdown-wrapper.active').each(function(){
				$(this).removeClass('active');
			});
			$(this).toggleClass('active');
			event.stopPropagation();
		});	
		obj.dd.on('click', '.js-dropdown-item', function(event){
			event.preventDefault();
			var msg = $(this).text();
			$(this).parents().prev('.js-dropdown-item-selected').text(msg);
			$(this).parents('.js-dropdown-wrapper').removeClass('active');
		});	
	}
}

$(function() {

	var dd = new DropDown( $('.js-dropdown-wrapper') );

	$(document).click(function() {
		// all dropdowns
		$('.js-dropdown-wrapper').removeClass('active');
	});
	
	// Textarea
	autosize($('textarea'));
	$('.js-comment-textarea').on('focus', function() {
		$(this).parent().toggleClass('active');
	});
});
