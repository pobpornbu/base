$(function() {

    // Textarea
    autosize($('textarea'));
    $('.js-comment-textarea').on('focus', function() {
    	$(this).parent().toggleClass('active');
    });

    // Tab
    // $('#myTab').on('click', 'a', function(e) {
    //   e.preventDefault();
    //   $(this).tab('show');
    //   $(this).toggleClass('focus');
    //   $(this).css('background', 'red');
    // });//.on('click', 'li', function(){
        //$(this).removeClass('active');
    // });

    // Adjust Font Size
    $(".js-btn-adjustfont").textresizer({
        target: "#js-text-resize",
        sizes:  [ "14px", "16px", "18px" ],
        selectedIndex: 0
    });
    $('#js-text-resize font, #js-text-resize span[style]').contents().unwrap();

    // Tooltips
    $(".js-share-btn").each(function(){
        // if(!$(this).data('tooltipsterNs')){
        $(this).tooltipster({
        interactive: true,
        position: 'bottom',
        trigger: 'click',
        theme: 'tooltipster-shadow',
        content: $(this).parents('.js-share').find('.js-share-dialog'),
        // functionInit: function($button,$dialog){
        //  //bind social share button
        //  Apps.social.bindShareButton($dialog,$button);
        // },
            functionReady: function(){
              $(this).addClass('active');
            },
            functionAfter: function(){
              $(this).removeClass('active');
            }
                
        }).click(function(e){e.preventDefault();});
        // }
    });

    // Example Malihu Scroll
    // $(".js-nav-scroll-news, .js-nav-scroll-program").mCustomScrollbar({
    //     setHeight: 300,
    //     theme: 'minimal-dark',
    //     mouseWheel:{ enable: true, preventDefault: true}
    // });

    // $(".js-nav-scroll-gallery").mCustomScrollbar({
    //     setHeight: 300,
    //     theme: 'minimal-dark',
    //     mouseWheel:{ enable: true, preventDefault: true, scrollAmount: 600, deltaFactor: 600}
    // });
    $('.menu__icon').click(function(){
        $(this).toggleClass('open');
    });
});

    $('.js-tab-list').each(function(){
        var $this           = $(this);
        var $currentwrap    = $this.find('div.active');
        var $currentlink    = $currentwrap.find('a');
        var $targetpanel    = $($currentlink.data('target'));

        //For Desktop
        $this.on('mouseover', '.js-tab-control', function(e) {
            e.preventDefault();
            var $currentlink = $(this);
            var id = $currentlink.data('target');
            if (id && !$currentlink.is('.active')) {
                $targetpanel.removeClass('active');
                $currentwrap.removeClass('active');

                $targetpanel = $(id).addClass('active');
                $currentwrap = $currentlink.parent().addClass('active');
            }
        });

        //For mobile
        /*if(Modernizr.touch){
            $this.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
            });
            $this.on('click', '.js-tab-control', function(){
                var getLink             = $(this).data('href'); //get attr data-href for open link
                if(getLink){
                    window.location.href = getLink;
                }       
            });
        }*/
    });


function printImg() {
    popup = window.open();
    popup.document.write("<img src='images/map.png' />");
    popup.print();
}

