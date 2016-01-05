;(function($, window, document, undefined) {

    var pluginName = 'select',
        defaults = {
            propertyName: "value"
        };

    function Plugin(element, options){
        this.element = element;
        this.options = $.extend( {
            list         : text,
            theme        : null,
            complete     : null
        }, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function(){
        var numberOfOptions = this.element.children('option').length,
            $selectWrap = this.element.wrap('<div class="select__wrap"></div>');

        this.element.addClass('select-hidden');

        this.element.after('<div class="select__selected"></div>');

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
                    this.element.removeClass('active').next('ul.select__options').hide();
                });
                this.element.toggleClass('active').next('ul.select__options').toggle();
            }
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            //close
            $list.hide();
            $styledSelect.removeClass('active');
            //break
            if(this.element.text() == $styledSelect.text()) return;
            //set value
            $styledSelect.text(this.element.text());

            if(this.options.list === 'int-link'){
                window.location.href= this.element.attr('rel');
            }else if(this.options.list === 'ext-link'){
                window.open(this.element.attr('rel'), '_blank');
            }else{
                $this.val(this.element.attr('rel')).trigger('change');
            }
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

        if ( $.isFunction( settings.complete ) ) {
            settings.complete.call( this );
        }

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, 
                new Plugin( this, options ));
            }
        });
    }

}(jQuery, window, document));