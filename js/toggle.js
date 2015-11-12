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
					// if($('.cd-primary-nav').hasClass('nav-is-visible')) {
          openMenu();
          // }
      });

			//close lateral menu on mobile 
			$('.js-overlay').on('click swipeleft swiperight', function(){
				if($('.js-menu-side').hasClass('is-menu-open')) {
					closeMenu();
					// toggleSearch('close');
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

});