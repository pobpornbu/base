$(document).ready(function(){
  // Tab
  $('#myTab').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.js-menu-side').each(function(){
      var $this  = $(this),
      		$btn   = $this.find('.js-menu-btn'),
          $list  = $this.find('.js-menu-list'),
          $overlay = $this.find('.js-overlay');

      $this.on('click', '.js-menu-btn', function(e){
          e.preventDefault();
          openMenu();
      });

			//close lateral menu on mobile
			$('.js-overlay').on('click swipeleft swiperight', function(){
				if($('.js-menu-side').hasClass('is-menu-open')) {
					closeMenu();
					$('.js-overlay').removeClass('open');
				}
			});

			$list.on('click', function(){
				if($(this).hasClass('open')) {
					closeMenu();
				}
			});

      function openMenu() {
        $btn.toggleClass('open');
        $list.toggleClass('open');
        $overlay.toggleClass('open');
        $this.toggleClass('is-menu-open');
      }

      function closeMenu() {
        $btn.removeClass('open');
        $list.removeClass('open');
        $overlay.removeClass('open');
        $this.removeClass('is-menu-open');
      }
  });

  $('.js-popup-btn').on('click', function(e){
    var btn = $(this).data('popup-btn');
    console.log(btn);

    if($('.js-popup-content.'+btn).css('display') == 'none'){
      $('.js-popup-btn').removeClass('active');
      $('.js-popup-content').hide();

      $(this).addClass('active');
      $('.js-popup-content.'+btn).show();
    }else{
      $('.js-popup-btn').removeClass('active');
      $('.js-popup-content').hide();
    }
  });

});