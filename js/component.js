$(function() {

// Textarea
autosize($('textarea'));
$('.js-comment-textarea').on('focus', function() {
	$(this).parent().toggleClass('active');
});

});