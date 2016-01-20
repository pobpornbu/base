/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            list         : 'text',
            theme        : null,
            complete     : null
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
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

        // this.$header = this.$el.find('.header');
        // this.$body   = this.$el.find('.body');

        this.$selected = this.$elem.next('.select__selected');

        var numberOfOptions = this.$elem.children('option').length,
            $selectWrap = this.$elem.wrap('<div class="select__wrap"></div>');

        this.$elem.hide();

        this.$elem.after('<div class="select__selected"></div>');

        if( this.options.theme ){
            $selectWrap.addClass( this.options.theme );
        }

        var $styledSelect = this.$elem.next('div.select__selected'),
            $list = $('<ul />', {'class': 'select__options'}).insertAfter($styledSelect),
            $listItems = $list.children('li').addClass('select__option');

        $styledSelect.text(this.$elem.children('option').eq(0).text());


        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: this.$elem.children('option').eq(i).text(),
                rel: this.$elem.children('option').eq(i).val(),
                class: this.$elem.children('option').eq(i).attr('class')
            }).appendTo($list);
        }

        this.init();
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        var self = this;
        console.log(self);
        // console.log(self.children.length);

        // this.$header.on('click.' + name, '.title', function(e) {
        //   e.preventDefault();

        //   self.editTitle();
        // });
        // this.$selected = this.$elem.next('.select__selected');

        this.$selected.on("click", function(e){
          e.stopPropagation();

            if($selected.hasClass('active')){
                self.closeSelect();
            }else{
                self.openSelect();
            }
        });

      // $listItems.on('click', function(e) {
      //     e.stopPropagation();
      //     //close
      //     $list.hide();
      //     $styledSelect.removeClass('active');
      //     //break
      //     if($(this).text() == $styledSelect.text()) return;
      //     //set value
      //     $styledSelect.text($(this).text());

      //     if(this.options.list == 'int-link'){
      //         window.location.href= $(this).attr('rel');
      //     }else if(this.options.list == 'ext-link'){
      //         window.open($(this).attr('rel'), '_blank');
      //     }else if(this.options.list == 'text'){
      //         $this.val($(this).attr('rel')).trigger('change');
      //     }
      // });
    };

    Plugin.prototype.closeSelect = function() {
        // this.$header.addClass('editing');
        this.$selected.removeClass('active');
        $list.hide();
    };

    Plugin.prototype.openSelect = function() {
        // var val = this.$header.find('.title').val();
        // this.$header.removeClass('editing');

        // $('.select__selected.active').each(function(){
        //     $(this).removeClass('active').next('ul.select__options').hide();
        // });
        this.$selected.toggleClass('active').next('ul.select__options').toggle();
        console.log('open');
    };

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
