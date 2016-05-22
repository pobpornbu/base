(function ( window, document) {
  'use strict';

  var Accordion = (function() {

    var Accordion = function(element, options) {
      // create reference
      this.buttons   = document.querySelector(element).querySelectorAll('.acc-button');
      this.contents  = document.querySelector(element).querySelectorAll('.acc-content');

      var defaults = {
        closeAll: false
      };
      // Create options by extending defaults with the passed in arugments
      if (arguments[1] && typeof arguments[1] === "object") {
        this.options = extend(defaults, arguments[1]);
      }else{
        this.options = defaults;
      }

      if(this.options.closeAll === true) this.close();

      this.init();
    };

    // Public Methods
    Accordion.prototype = {
      init: function(){
        var self = this;

        [].forEach.call(self.buttons, function(button){

          button.addEventListener('click', function(e){
            if(e.target.nextElementSibling.classList.contains('acc-is-active') === true){
              self.close(e);
            }else{
              self.open(e);
            }
          });

        });
      },

      close: function (e){
        var self = this;
        // e.target.nextElementSibling.classList.remove('acc-is-active');
        [].forEach.call(this.contents, function(content){
          content.classList.remove('acc-is-active');
        });
      },

      open: function (e){
        var self = this;
        [].forEach.call(this.contents, function(content){
          content.classList.remove('acc-is-active');
        });
        e.target.nextElementSibling.classList.add('acc-is-active');
      }
    };

    function extend(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    return Accordion;

  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Accordion;
  else
    window.Accordion = Accordion;

})( window, document );

// document.addEventListener('DOMContentLoaded', function () {

// 	var btns = document.querySelectorAll('.accordionButton'),
// 			cnts = document.querySelectorAll('.accordionContent');

// 	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)

// 	[].forEach.call(btns, function (btn) {

// 		btn.addEventListener('click', function(e) {
// 		//REMOVE THE ON CLASS FROM ALL BUTTONS
// 			console.log('click');
// 			btn.classList.remove('accordion-btn-active');

// 			//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
// 		 	[].forEach.call(cnts, function(cnt){
// 		 		cnt.classList.remove('accordion-content-active');
// 		 	});
// 			//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT

// 			if(e.target.nextElementSibling.hasAttribute('class','accordion-content-active') == true){
// 				//ADD THE ON CLASS TO THE BUTTON
// 				// var elh = e.target.nextElementSibling.clientHeight;
// 				// console.log(elh);
// 				e.target.classList.add('accordion-btn-active');
// 				e.target.nextElementSibling.classList.add('accordion-content-active');

// 				// e.target.nextElementSibling.setAttribute("style", "max-height:"+ elh);;

// 				//OPEN THE SLIDE
// 				// $('.accordionContent').slideDown('normal',function(){
// 					// var eltop = $(this).parents('.list-clks').offset().top - 60;
// 				 //    $('html, body').animate({
// 			  //   		scrollTop: eltop
// 					// });
// 				// });

// 			}
// 		});
// 	});


 //  $('.tab-list-c').on('click', function() {
	// 	var id = $(this).data('type'),
	// 	  	lid = $(this).data('group');

	// 	var $tbList = $(this).parent().find('.tab-list-c');
	// 	$(this).addClass('current');
	// 	$tbList.removeClass('current');
	// 	for(i=0; i < id; i++){
	// 		$tbList.eq(i).addClass('current');
	// 	}
	// 	$(this).parent().prev('div').children().attr('src','images/screen_mob/l'+lid+'_screen'+id+'.png');

 //    var x = $(this).parents('.list-clks').offset().top,
	//     	y = $(window).scrollTop(),
	//    		z = (y - x) + 60;
 //    $('html, body').animate({
 //    		scrollTop: y - z
	// 	});
	// });


// });

