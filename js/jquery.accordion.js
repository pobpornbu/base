$(document).ready(function() {
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').on('click', function() {
		// console.log('accordion');
		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('on');

		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {

			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');

			//OPEN THE SLIDE
			$(this).next().slideDown('normal',function(){
				var eltop = $(this).parents('.list-clks').offset().top - 60;
			    $('html, body').animate({
		    		scrollTop: eltop
				});
			});

		}
	});


  $('.tab-list-c').on('click', function() {
		var id = $(this).data('type'),
		  	lid = $(this).data('group');

		var $tbList = $(this).parent().find('.tab-list-c');
		$(this).addClass('current');
		$tbList.removeClass('current');
		for(i=0; i < id; i++){
			$tbList.eq(i).addClass('current');
		}
		$(this).parent().prev('div').children().attr('src','images/screen_mob/l'+lid+'_screen'+id+'.png');

    var x = $(this).parents('.list-clks').offset().top,
	    	y = $(window).scrollTop(),
	   		z = (y - x) + 60;
    $('html, body').animate({
    		scrollTop: y - z
		});
	});


});
