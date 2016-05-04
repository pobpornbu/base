/*
* Menutoggle.js - minimal responsive javascript framework
* Author: Pobporn Burintarathikul
* Copyright (c) 2016 Pobporn Burintarathikul
* Dual MIT/BSD license
*/

;(function ($, window, document) {

  var pluginName = "menutoggle",
    defaults = {
      responsive: true,
      breakpoint: 768,
      overlay: true
    };

  function Plugin(element, options) {
    // list of instance variables

    this.bodyOverflowX;
    // stack of custom callbacks provided as parameters to API methods
    this.callbacks = {
      hide: [],
      show: []
    };
    this.checkInterval = null;
    // this will be the user content shown in the tooltip. A capital "C" is used because there is also a method called content()
    this.Content;
    // this is the original element which is being applied the tooltipster plugin
    this.$el = $(element);
    this.$body = $('body');
    this.$container = $('.container');
    this.$btn   = $('.js-menu-btn'),
    this.$list  = $('.js-menu-list'),
    this.$overlay = $('.js-overlay');
    // this will be the element which triggers the appearance of the tooltip on hover/click/custom events.
    // it will be the same as this.$el if icons are not used (see in the options), otherwise it will correspond to the created icon
    this.$elProxy;
    this.elProxyPosition;
    this.enabled = true;
    this.options = $.extend({}, defaults, options);
    this.mouseIsOverProxy = false;
    // a unique namespace per instance, for easy selective unbinding
    this.namespace = 'menutoggle-'+ Math.round(Math.random()*100000);
    // Status (capital S) can be either : appearing, shown, disappearing, hidden
    this.Status = 'hidden';
    this.timerHide = null;
    this.timerShow = null;
    // this will be the tooltip element (jQuery wrapped HTML element)
    this.$menutoggle;

    // for backward compatibility
    // this.options.iconTheme = this.options.iconTheme.replace('.', '');
    // this.options.theme = this.options.theme.replace('.', '');

    // launch
    this._init();
  }
  Plugin.prototype = {

    _init: function() {

      var self = this;

      // disable the plugin on old browsers (including IE7 and lower)
      if (document.querySelector) {
        // $('body').addClass('js-menu-side');
        $overlay = $('<div />', {'class': 'js-overlay overlay'}).insertAfter(self.$container);
      }
      self._resize();
      self._show();
      self._bind();
    },

    _bind: function(){
      var self = this;
      this.$btn.on('click.' + this.namespace , function(e){
          e.preventDefault();
          if($(this).hasClass('open')) {
            self._close();
          }else{
            self._open();
          }
      });

      this.$list.on('click.' + this.namespace , function(){
        if($(this).hasClass('open')) {
          self._close();
        }
      });

      //close lateral menu on mobile
      setTimeout(function(){
        this.$overlay.on('click swipeleft swiperight', function(){
          // if($('.js-menu-side').hasClass('is-menu-open')) {
            self._close();
            // $('.js-overlay').removeClass('open');
          // }
        });

      }, 500);

      $(window).on('resize', function(){
        self._resize();
      });
    },

    _show: function(callback) {
        var self = this;
        console.log('finish');
        self.$el.fadeIn(1000);
        // var finishCallbacks = function() {
        //   // trigger any hide method custom callbacks and reset them
        //   $.each(self.callbacks.hide, function(i,c) { c.call(self.$el); });
        //   self.callbacks.hide = [];
        // };

        var finish = function() {
          console.log('showing');
        }

        // finishCallbacks();

        // self.$tooltip.queue(finish);

    },

    _open: function(){ console.log('open');
      var self = this;
      self.$btn.addClass('open');
      self.$list.addClass('open');
      self.$overlay.addClass('open');
      self.$el.addClass('is-menu-open');
    },

    _close: function(){ console.log('close');
      var self = this;
      self.$btn.removeClass('open');
      self.$list.removeClass('open');
      self.$overlay.removeClass('open');
      self.$el.removeClass('is-menu-open');
    },

    _resize: function(){
      var self = this;
      if($(window).width() >= 768){
        console.log('desktop');
        self.$btn.hide();
        self.$list.removeClass('menu-sidebar-container');
        self.$list.addClass('menu-topbar-container');
      }else{
        console.log('mobile');
        self.$btn.show();
        self.$list.removeClass('menu-topbar-container');
        self.$list.addClass('menu-sidebar-container');
      }
    }
  };

  $.fn[pluginName] = function ( options ) {
      return this.each(function () {
          if ( !$.data(this, "plugin_" + pluginName )) {
              $.data( this, "plugin_" + pluginName,
              new Plugin( this, options ));
          }
      });
  };

})( jQuery, window, document );
