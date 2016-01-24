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

        // this.$header = this.$elem.find('.header');
        // this.$body   = this.$el.find('.body');

        // a unique namespace per instance, for easy selective unbinding
        // safeguard our plugin from breaking in the event that another script
        this.namespace = 'dropdown-'+ Math.round(Math.random()*100000);

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

        // place in right position : after created
        this.$selected = this.$elem.next('.select__selected');
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
        console.log(self.$list);
        console.log(self.$list.length);

        // this.$header.on('click.' + self._name, function(e) {
        //   e.preventDefault();

        //   self.editTitle();
        // });
        self.bindEvents();
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

    // Plugin.prototype.editTitle = function() {
    //     console.log('edit');
    //     this.$selected.addClass('editing');
    // };

    Plugin.prototype.bindEvents = function() {
        var self = this;
        this.$selected.on("click." + self._name, function(event){
            event.stopPropagation();
            self.openSelect();
        });
        this.$list.each(function(i, el){
            var $this = $(this);
            $this.on("click." + self._name, function(event){
                event.stopPropagation();
                self.replaceSelected();
                // self.closeSelect();
            });
        });
    };


    Plugin.prototype.openSelect = function() {
        if(this.$selected.hasClass('active')){
            console.log('close');
            this.$selected.removeClass('active').next('ul.select__options').hide();
        }else{
            // this.$selected.each(function(){
            //     console.log('active');
            //     this.$selected.removeClass('active');//.next('ul.select__options').hide();
            //     this.$list.hide();
            // });
            this.$selected.toggleClass('active').next('ul.select__options').toggle();
        }
    };

    Plugin.prototype.replaceSelected = function(i, el) {
        var $el = $(el), opted = $el.attr('rel');
        console.log(opted);
        this.$selected.text(opted).removeClass('active');
    };

    // Plugin.prototype.closeSelect = function() {
    //     console.log('close');
    //     // this.$header.addClass('editing');
    //     this.$selected.removeClass('active');
    //     this.$list.hide();
    // };

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
