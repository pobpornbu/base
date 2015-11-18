(function($) {

    $.fn.select = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            list         : text,
            theme        : null,
            callback     : null
        }, options);

        return this.each( function() {

            var $this = $(this), 
                numberOfOptions = $(this).children('option').length,
                $selectWrap = $(this).wrap('<div class="select__wrap"></div>');
          
            $(this).addClass('select-hidden'); 
            
            $(this).after('<div class="select__selected"></div>');

            if( settings.theme ){
                $selectWrap.addClass( settings.theme );
            }

            var $styledSelect = $this.next('div.select__selected');
            $styledSelect.text($this.children('option').eq(0).text());
          
            var $list = $('<ul />', {
                'class': 'select__options'
            }).insertAfter($styledSelect);
          
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val(),
                    class: $this.children('option').eq(i).attr('class')
                }).appendTo($list);
            }
          
            var $listItems = $list.children('li').addClass('select__option');

            $styledSelect.on("click", function(e){
                e.stopPropagation();
                if($styledSelect.hasClass('active')){
                    $styledSelect.removeClass('active');
                    $list.hide();
                }else{
                    $('.select__selected.active').each(function(){
                        $(this).removeClass('active').next('ul.select__options').hide();
                    });
                    $(this).toggleClass('active').next('ul.select__options').toggle();
                }
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                //close
                $list.hide();
                $styledSelect.removeClass('active');
                //break
                if($(this).text() == $styledSelect.text()) return;
                //set value
                $styledSelect.text($(this).text());

                if(settings.list === 'int-link'){
                    window.location.href= $(this).attr('rel'); 
                }else if(settings.list === 'ext-link'){
                    window.open($(this).attr('rel'), '_blank');            
                }else{
                    $this.val($(this).attr('rel')).trigger('change');
                }
            });
          
            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.hide();
            });

            if ( $.isFunction( settings.complete ) ) {
                settings.complete.call( this );
            }
        });
    }

}(jQuery));