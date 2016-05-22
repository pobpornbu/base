/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "toggleNav",
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

        this.$btn   = this.$elem.find('.js-menu-btn'),
        this.$list  = this.$elem.find('.js-menu-list'),
        this.$overlay = this.$elem.find('.js-overlay');

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

        self.bindEvents();
    };

    // Plugin.prototype.editTitle = function() {
    //     console.log('edit');
    //     this.$selected.addClass('editing');
    // };

    Plugin.prototype.bindEvents = function() {
        var self = this;
        this.$btn.on('click.' + self._name, function(event){
            event.preventDefault();
            // if($('.cd-primary-nav').hasClass('nav-is-visible')) {
            self.openMenu();
            // }
        });
        //close lateral menu on mobile 
        this.$overlay.on('click.' + self._name, function(){
            // if(this.$list.hasClass('is-menu-open')) {
                self.closeMenu();
            // }
        });

        this.$list.on('click.' + self._name, function(){
            // if(this.$list.hasClass('open')) {
                self.closeMenu();
            // }
        });
    };


    Plugin.prototype.openMenu = function() {
        this.$btn.toggleClass('open');
        this.$list.toggleClass('open');
        this.$overlay.toggleClass('open');
        this.$elem.toggleClass('is-menu-open');
    };

    Plugin.prototype.closeMenu = function() {
        this.$btn.removeClass('open');
        this.$list.removeClass('open');
        this.$overlay.removeClass('open');
        this.$elem.removeClass('is-menu-open');
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
