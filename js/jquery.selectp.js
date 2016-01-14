/*
 * 'Highly configurable' mutable plugin boilerplate
 * Author: @markdalgleish
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// Note that with this pattern, as per Alex Sexton's, the plugin logic
// hasn't been nested in a jQuery plugin. Instead, we just use
// jQuery for its instantiation.

;(function( $, window, document, undefined ){

  // our plugin constructor
  var Select = function( elem, options ){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;
      this.color = '#ff0000';

      // This next line takes advantage of HTML5 data attributes
      // to support customization of the plugin on a per-element
      // basis. For example,
      // <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
      this.metadata = this.$elem.data( 'myplugin' );
    };

  // the plugin prototype
  Select.prototype = {
    defaults: {
      list         : 'text',
      theme        : null,
      complete     : null
    },

    init: function() {
      // Introduce defaults that can be extended either 
      // globally or using an object literal. 
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      // Sample usage:
      // Set the message per instance:
      // $('#elem').plugin({ message: 'Goodbye World!'});
      // or
      // var p = new Plugin(document.getElementById('elem'), 
      // { message: 'Goodbye World!'}).init()
      // or, set the global default message:
      // Plugin.defaults.message = 'Goodbye World!'

      this.displayMessage();
      return this;
    },

    displayMessage: function() {
      // eg. show the currently configured message
      // console.log(this.config.message+this.config.person);
      // this.$elem.text(this.config.message+this.config.person).css('background', this.color);

      var numberOfOptions = this.$elem.children('option').length,
          $selectWrap = this.$elem.wrap('<div class="select__wrap"></div>');

      this.$elem.addClass('select-hidden');

      this.$elem.after('<div class="select__selected"></div>');

      if( this.config.theme ){
          $selectWrap.addClass( this.config.theme );
      }

      var $styledSelect = this.$elem.next('div.select__selected');
      $styledSelect.text(this.$elem.children('option').eq(0).text());

      var $list = $('<ul />', {
          'class': 'select__options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: this.$elem.children('option').eq(i).text(),
              rel: this.$elem.children('option').eq(i).val(),
              class: this.$elem.children('option').eq(i).attr('class')
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
                  this.$elem.removeClass('active').next('ul.select__options').hide();
              });
                  console.log('active');
              this.$elem.css('background','#ff0000');
          }
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          //close
          $list.hide();
          $styledSelect.removeClass('active');
          //break
          if(this.$elem.text() == $styledSelect.text()) return;
          //set value
          $styledSelect.text(this.$elem.text());

          if(this.config.list === 'int-link'){
              window.location.href= this.$elem.attr('rel');
          }else if(this.config.list === 'ext-link'){
              window.open(this.$elem.attr('rel'), '_blank');
          }else if(this.config.list === 'text'){
              $this.val(this.$elem.attr('rel')).trigger('change');
          }
      });    
    }
  };

  Select.defaults = Select.prototype.defaults;

  $.fn.select = function(options) {
    return this.each(function() {
      new Select(this, options).init();
    });
  };

  window.Select = Select;

})( jQuery, window , document );