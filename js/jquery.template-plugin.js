;(function( $, window, document, undefined){
  'use strict';

  var pluginName = "modal",
      default = {
        callback: function(){}
      };

  function Plugin(element, options){
    this.el       = element;
    this.overlay  = document.querySelector('.overlay');
    this.modalc   = document.querySelector('.modal-container');
    this.btn      = document.querySelector('.modal-btn');
    this.options  = $.extend({}, defaults, options);
    this.namespace = 'modal-'+ Math.round(Math.random()*100000);
    this._init();
  }

  Plugin.prototype = {
    _init: function(){
      var self = this;
      console.log('init');
    },

    show: function(){
      var self = this;
      console.log('show');
    },

    hide: function(){
      var self = this;
      console.log('hide');
    },

    enable: function(){
      console.log('enable');
      return this;
    },

    disable: function(){
      this.hide()
      console.log('disable');
    },

    destroy: function(){
      var self = this;
      self.hide();
      console.log('destroy');
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

})(jQuery, window, document );