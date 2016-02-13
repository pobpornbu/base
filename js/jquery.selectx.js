/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "dropdown",
        defaults = {
            item         : 'text',
            theme        : null,
            complete     : null
        };

    // The actual plugin constructor
    function Plugin( element, options, document ) {
        this.$elem = $(element);
        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        // var meta     = this.$el.data(name + '-opts');
        // this.opts    = $.extend(this.defaults, opts, meta);

        // this.$el.data(name, this);

        // a unique namespace per instance, for easy selective unbinding
        // safeguard our plugin from breaking in the event that another script
        this.namespace = 'dropdown-'+ Math.round(Math.random()*100000);

        this.$elem.hide();
        this.$elem.wrap('<div class="select__wrap"></div>');
        this.$select = this.$elem.parent('.select__wrap');

        if( this.options.theme ){
            this.$select.addClass( this.options.theme );
        }

        this.$elem.after('<div class="select__selected"></div>');
        this.$selected = this.$elem.next('.select__selected');

        var $list = $('<ul />', {'class': 'select__options'}).insertAfter(this.$selected),
            numOpt = this.$elem.children('option').length;

        this.$selected.text(this.$elem.children('option').eq(0).text());


        for (var i = 0; i < numOpt; i++) {
            $('<li />', {
                text: this.$elem.children('option').eq(i).text(),
                'data-value': this.$elem.children('option').eq(i).val(),
                class: this.$elem.children('option').eq(i).attr('class')
            }).appendTo($list);
        }

        $list.children('li').first().hide();

        // place in right position : after created
        this.$lists = this.$elem.siblings('.select__options');
        this.$list = this.$lists.children();
        this.init();
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        var self = this;
        console.log(self.$select);
        console.log(self.$list.length);

        self.bindEvents();
    };

    Plugin.prototype.bindEvents = function() {
        var self = this;

        this.$selected.on("click." + self._name, function(event){
            event.stopPropagation();
            self.openSelect();
        });

        this.$list.on('click.' + self._name, function(event){
            event.stopPropagation();
            $(this).each(function(index, element){
                self.replaceSelected(index, element);
                self.closeSelect();
            });
        });

        $(document).on('click.' + self._name, function(e){
            e.stopPropagation();
            self.closeSelect();
        });
    };

    Plugin.prototype.openSelect = function() {
        $('.select__selected.active').each(function(){
            console.log('is_open');
            $(this).removeClass('active').next('.select__options').hide();
        });
        this.$selected.toggleClass('active').next('.select__options').toggle();
    };

    Plugin.prototype.replaceSelected = function(index, element) {
        var self = this,
            $element = $(element),
            opted = $element.text(),
            link = $element.data('value').toLowerCase();

        if(opted == self.$list.text()) return;

        if(self.options.item == 'internal-link'){

            window.location.href= link;

        }else if(self.options.item == 'external-link'){

            window.open( link, '_blank');

        }else if(self.options.item == 'text'){

            self.$selected.text(opted);
            // $this.val($element.attr('rel')).trigger('change');
        }
    };  // ****** Cannot access text of clicked li

    Plugin.prototype.closeSelect = function() {
        console.log('close');
        this.$selected.removeClass('active').next('.select__options').hide();
        $(document).off('click.'+self._name)
    }; // ****** Cannot open again after closing

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }
})( jQuery, window, document );
